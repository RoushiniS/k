import "./form.css";

export default function Form() {
  return (
    <div className="App">
      <div className="formDiv">
        <div className="div1">
          <h1>Welcome text!</h1>
          <p>Find the form on right</p>
          <p>Contact us!</p>
        </div>

        <div className="div2">
          <label for="firstname">
            {" "}
            Name <input type="text" id="firstName" />
          </label>
          <label for="email">
            Email <input type="email" id="email" />
          </label>

          <button class="btn">Submit</button>
        </div>
      </div>
    </div>
  );
}
