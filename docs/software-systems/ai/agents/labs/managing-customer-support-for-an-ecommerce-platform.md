---
id: managing-customer-support-for-an-ecommerce-platform
title: Managing customer support for an ecommerce platform
description: Managing customer support for an ecommerce platform
---

Every day, your customer-support team fields dozens or hundreds of emails asking to 
- refund a broken mug, 
- cancel an unshipped order, 
- change a delivery address. 

For each message, a human agent has to 
- read free-form text, 
- look up the order in your backend, 
- call the appropriate API, and then
- type a confirmation email. 

This repetitive two-minute process is ripe for automation—but only if we carve off the right slice. When we realize that humans
type keys and click buttons, often following rules and guidelines, we see that many of
these same patterns can be performed by well-designed systems that rely on foundation models. 

We want our agent to 
1. take a raw customer message plus the order record, 
2. decide which tool to call (issue_refund, cancel_order, or update_address_for_order), 
3. invoke that tool with the correct parameters, and then send a brief confirmation message. 

That three-step workflow is narrow enough to build quickly, valuable enough to free up human time, and rich enough to showcase intelligent behavior.
