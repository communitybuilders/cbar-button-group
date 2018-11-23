# \<cbar-button-group\>



`cbar-button-group` is an element that groups buttons together and makes them toggleable as a group, much like a group of radio buttons.

Example:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script type="module" src="./cbar-button-group.js"></script>

    <style is="custom-style">
      html, body {
        height: 100%;
        margin: 0;
      }
    
      #container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    
      cbar-button-group {
        display: flex;
        width: 300px;
        justify-content: space-around;
      }
    
      cbar-button-group button {
        outline: none;
      }
    
      cbar-button-group button[active] {
        background-color: #030308;
        color: #0f0;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<div id="container">
  <cbar-button-group
      selected="option 2"
      attr-for-selected="name"
      selected-attribute="active">
    <button name="option 1">Option 1</button>
    <button name="option 2">Option 2</button>
    <button name="option 3">Option 3</button>
  </cbar-button-group>
</div>
```
