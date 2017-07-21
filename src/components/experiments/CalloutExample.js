import React from "react";
import { Callout } from "office-ui-fabric-react/lib/Callout";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

/* custom stuff */
import { BaseComponent } from "../BaseComponent";

let divStyles = {
  borderTop: "1px solid #eee",
  overflowX: "hidden"
};

export class CalloutExample extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = { isCalloutVisible: false };

    /* bind private methods */
    this._bind("_onShowMenuClicked", "_onCalloutDismiss");
  }

  _onShowMenuClicked() {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }

  _onCalloutDismiss() {
    this.setState({
      isCalloutVisible: false
    });
  }

  render() {
    const isCalloutVisible = this.state.isCalloutVisible;

    return (
      <div
        className="ms-font-xl"
        ref={calloutTarget => this._menuButtonElement = calloutTarget}
        style={divStyles}
      >
        <p>Fabric UI Callout Example</p>
        <p>isCalloutVisible? : {JSON.stringify(isCalloutVisible)}</p>
        <p>
          <PrimaryButton onClick={this._onShowMenuClicked}>
            {isCalloutVisible ? "Hide Callout" : "Show Callout"}
          </PrimaryButton>
        </p>

        {isCalloutVisible &&
          <Callout
            className="chris-Callout"
            targetElement={this._menuButtonElement}
            onDismiss={this._onCalloutDismiss}
            setInitialFocus={true}
          >
            <div className="chris-Callout-header">
              <p className="chris-Callout-title">
                My name is Craig Callout
              </p>
            </div>
            <div className="chris-Callout-inner">
              <div className="chris-Callout-content">
                <p className="chris-Callout-subText">
                  Often I appear out of nowhere to explain, unobtrusively, what you may not already know.
                </p>
              </div>
            </div>
          </Callout>}
      </div>
    );
  }
}

export default CalloutExample;
