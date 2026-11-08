import { visit } from "unist-util-visit";

const bracketMath = {
  tokenize(effects, ok, nok) {
    let fenceLength = 0;
    let candidateLength = 0;
    let candidateToken;
    let mathToken;
    let closingCode;

    return start;

    function start() {
      return opening;
    }

    function opening(code) {
      if (code === 92 && fenceLength < 3) {
        effects.consume(code);
        fenceLength += 1;
        return opening;
      }

      if ((code === 91 || code === 40) && (fenceLength === 1 || fenceLength === 2)) {
        closingCode = code === 91 ? 93 : 41;
        mathToken = effects.enter(code === 91 ? "bracketMathDisplay" : "bracketMathInline");
        effects.consume(code);
        return value;
      }

      return nok(code);
    }

    function value(code) {
      if (code === null) {
        return nok(code);
      }

      if (code === 92) {
        candidateToken = effects.enter("bracketMathCandidate");
        effects.consume(code);
        candidateLength = 1;
        return candidate;
      }

      effects.enter("bracketMathValue");
      effects.consume(code);
      effects.exit("bracketMathValue");
      return value;
    }

    function candidate(code) {
      if (code === 92 && candidateLength < fenceLength) {
        effects.consume(code);
        candidateLength += 1;
        return candidate;
      }

      if (candidateLength !== fenceLength || code !== closingCode) {
        return candidateIsContent(code);
      }

      effects.consume(code);
      if (closingCode === 41) {
        effects.exit("bracketMathCandidate");
        effects.exit(mathToken.type);
        return ok(code);
      }

      return trailingSpace;
    }

    function trailingSpace(code) {
      if (code === null || code === 10 || code === 13) {
        effects.exit("bracketMathCandidate");
        effects.exit(mathToken.type);
        return ok(code);
      }

      if (code === 32 || code === 9) {
        effects.consume(code);
        return trailingSpace;
      }

      return candidateIsContent(code);
    }

    function candidateIsContent(code) {
      candidateToken.type = "bracketMathValue";
      effects.exit("bracketMathValue");
      return value;
    }
  },
};

function bracketMathFromMarkdown() {
  function enterMath(token, isDisplay) {
    this.enter(
      {
        type: "inlineMath",
        value: "",
        data: {
          hName: "code",
          hProperties: {
            className: ["language-math", isDisplay ? "math-display" : "math-inline"],
          },
          hChildren: [],
          bracketMathDisplay: isDisplay,
        },
      },
      token,
    );
  }

  return {
    enter: {
      bracketMathCandidate() {},
      bracketMathDisplay(token) {
        enterMath.call(this, token, true);
      },
      bracketMathInline(token) {
        enterMath.call(this, token, false);
      },
    },
    exit: {
      bracketMathCandidate() {},
      bracketMathValue(token) {
        const value = this.sliceSerialize(token);
        const node = this.stack[this.stack.length - 1];
        node.value += value;
        const children = node.data.hChildren;
        const lastChild = children[children.length - 1];

        if (lastChild?.type === "text") {
          lastChild.value += value;
        } else {
          children.push({ type: "text", value });
        }
      },
      bracketMathDisplay(token) {
        this.exit(token);
      },
      bracketMathInline(token) {
        this.exit(token);
      },
    },
  };
}

export default function remarkBracketMath() {
  const data = this.data();
  const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);

  micromarkExtensions.push({ text: { 92: bracketMath } });
  fromMarkdownExtensions.push(bracketMathFromMarkdown());

  return (tree) => {
    visit(tree, "paragraph", (node, index, parent) => {
      if (!parent || index === undefined || node.children.length !== 1) {
        return;
      }

      const math = node.children[0];
      if (math.type !== "inlineMath" || math.data.bracketMathDisplay !== true) {
        return;
      }

      const code = {
        type: "element",
        tagName: "code",
        properties: {
          className: ["language-math", "math-display"],
        },
        children: [{ type: "text", value: math.value }],
      };

      parent.children[index] = {
        type: "math",
        meta: null,
        value: math.value,
        data: {
          hName: "pre",
          hChildren: [code],
        },
        position: node.position,
      };
    });
  };
}
