import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "@excalidraw/excalidraw/index.css";

type Props = {
  code: string;
};

function DiagramClient({ code }: Props) {
  const [Editor, setEditor] = useState<any>(null);
  const [scene, setScene] = useState<any>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const data = JSON.parse(code);

        const module = await import("@excalidraw/excalidraw");

        if (!active) return;

        setScene(data);
        setEditor(() => module.Excalidraw);
      } catch (error) {
        console.error("Unable to load Excalidraw diagram:", error);
      }
    }

    load();

    return () => {
      active = false;
    };
  }, [code]);

  if (!Editor || !scene) {
    return <div>Loading diagram...</div>;
  }

  return (
    <div
      style={{
        height: 800,
        width: "100%",
        overflow: "hidden",
        border: "1px solid var(--ifm-color-emphasis-300)",
        borderRadius: 8,
      }}
    >
      <Editor
        initialData={{
          elements: scene.elements,
          appState: {
            ...scene.appState,
            viewBackgroundColor:
              scene.appState?.viewBackgroundColor ?? "#ffffff",
            viewModeEnabled: true,
          },
        }}
        viewModeEnabled={true}
      />
    </div>
  );
}

export default function ExcalidrawDiagram(props: Props) {
  return (
    <BrowserOnly fallback={<div>Loading diagram...</div>}>
      {() => <DiagramClient {...props} />}
    </BrowserOnly>
  );
}
