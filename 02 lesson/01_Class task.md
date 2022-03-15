## Class task - props & state & setState

1. Install crypto-js from npm
2. import to `EncryptMSG` and use.
3. In state - define a message string
4. add header from props - `Encrypted message`
5. in html - encrypt the message using any encryption you'd like, and show to the user
6. color the encrypted message in red.
   > note: style={{}}
7. Add a button that changes the message to something else.

## Solution

- In npm website: search for documentation for `crypto-js`:
  https://www.npmjs.com/package/crypto-js

```js
import React, { Component } from "react";
import MD5 from "crypto-js/md5";
import AES from "crypto-js/aes";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "My secret code..." };
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h4>MD5:</h4>
        <p>{MD5.apply(this.state.msg).toString()}</p>

        <h4>AES:</h4>
        <p>{AES.encrypt(this.state.msg, "secret key").toString()}</p>

        <button onClick={() => this.setState({ msg: "123" })}>
          Change secret message
        </button>
      </div>
    );
  }
}
```
