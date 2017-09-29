import React from "react";
import { Callout } from "office-ui-fabric-react/lib/Callout";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

/* custom stuff */
import  BaseComponent  from "../BaseComponent";

export class CalloutExample extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = { isCalloutVisible: false };

    /* bind private methods */
    this._bind("_showCallout", "_hideCallout");
  }

  _showCallout() {
    this.setState({ isCalloutVisible: true });
  }

  _hideCallout() {
    this.setState({ isCalloutVisible: false });
  }

  render() {
    const isCalloutVisible = this.state.isCalloutVisible;

    return (
      <div>
        <p className="ms-font-su" ref={p => this._calloutTarget = p}>
          Fabric UI Callout Example
        </p>
        <PrimaryButton
          onClick={this._showCallout}
          disabled={this.state.isCalloutVisible}
        >
          Show Callout
        </PrimaryButton>

        {isCalloutVisible &&
          <Callout
            className="chris-Callout"
            targetElement={this._calloutTarget}
            onDismiss={this._hideCallout}
            setInitialFocus={true}
          >
            <div className="chris-Callout-header">
              <p>
                My name is Chris Callout
              </p>
            </div>
            <div className="chris-Callout-inner">
              <div className="chris-Callout-content">
                <p className="chris-Callout-subText">
                  Often I appear out of nowhere to explain, unobtrusively, what you may not already know.
                </p>
                <PrimaryButton onClick={this._hideCallout}>Close</PrimaryButton>
              </div>
            </div>
          </Callout>}
      </div>
    );
  }
}

export default CalloutExample;
