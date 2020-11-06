import React from "react";
import atomize from "@quarkly/atomize";
import "./styles.css";

const InputText = ({
  type = "checkbox",
  title = "Accept Terms & Conditions",
  checked = false,
  name = "accepts",
  tabIndex = "1",
  ...props
}) => (
  <div {...props} className="outerDiv">
    <input
      type={`${type}`}
      name={`${name}`}
      defaultChecked={checked}
      tabIndex={`${tabIndex}`}
    />
    <span class="checkmark" />
    <div className="heading">{`${title}`}</div>
  </div>
);

const Text = atomize(InputText)({
  name: "Accept Checkbox",
  description: "",
  propInfo: {
    type: {
      control: "input",
      category: "Main"
    },
    title: {
      control: "input",
      category: "Main"
    },
    checked: {
      control: "input",
      category: "Main"
    },
    name: {
      control: "input",
      category: "Main"
    },
    tabIndex: {
      control: "input",
      category: "Main"
    }
  }
});

export default Text;
