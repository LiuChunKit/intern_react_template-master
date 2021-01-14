import React from 'react'
import { Button, Form } from 'react-bootstrap'

// import your other js functions
import AppendDDL from './Append/AppendDDL'

export default class Home extends React.Component {
  constructor() {
    super();
    // this is basically your global variable, it will not change until you use setState
    this.state = {
      title: "Registration Form",
      text: "Click to register.",
      //array: ["Johor", "Melaka", "Pahang", "Negeri Sembilan", "Selangor", "Kuala Lumpur", "Perak", "Kedah", "Pinang"],
      contactNo: "",
      selState: '',
      selSubjects: [],
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    var input = this.state.input
    input[event.target.name] = event.target.value
    this.setState({
      input
    });
  }

  // your function here
  handleSubmit = event => {
    event.preventDefault()

    if (this.validate()) {
      // get your value in form with event.target.name.value
      var fullNameText = event.target.name.value
      var emailText = event.target.email.value
      var contactNoText = event.target.contactNo.value

      let input = {};
      input["name"] = "";
      input["email"] = "";
      this.setState({ input: input });

      // setState, one of the important function of react, to overwrite the state, else it will be same forever
      this.setState({ title: "Registration Form", text: "Account register successful" }, () => {
        alert("Full Name: " + fullNameText + "\nEmail: " + emailText + "\nContact No: " + contactNoText +
              "\nSelected State: " + this.state.selState + "\nSelected Subject(s): " + this.state.selSubjects);
      })


    }
    else {
      alert("Please fill in the blank.")
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your full name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter email.";
    }

    this.setState({ errors: errors });

    return isValid;
  }

  selectState = event => {
    this.setState({selState: event});
  }

  selectSubjects = event => {
    this.setState({selSubjects: event});
  }

  /*componentDidMount() {
    var array = this.state.array
    var temp_arr = []
    array.forEach((data, index) => {
      temp_arr.push(<span key={"span_" + index}>{data}</span>)
    });
    this.setState({ body: temp_arr })
  }*/

  render() {
    // example of setting variable, try not to use this, use state instead
    //var example_var = "Example"

    // you render your template here
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>{this.state.title}</h2>

          <div>
            <p>Full Name</p>
            <input
              type="text"
              name="name"
              value={this.state.input.name || ""}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter full name"
              id="name"
            />
            <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div>
            <p>Email</p>
            <input
              type="text"
              name="email"
              value={this.state.input.email || ""}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter email"
              id="email"
            />
            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div>
            <p>Contact No</p>
              <Form.Control name="contactNo" placeholder="Enter contact no"></Form.Control>
          </div>

          {/* call your imported js function and throw props into it, if props exist, it will do something based on the props, ctrl + click on AppendDDL to check*/}
          <div>
            <p>State</p>
              <AppendDDL options = {[{ value: "Johor", label: "Johor" },
                                    { value: "Melaka", label: "Melaka" },
                                    { value: "Pahang", label: "Pahang" },
                                    { value: "Selangor", label: "Selangor" },
                                    { value: "NegeriSembilan", label: "Negeri Sembilan" },
                                    { value: "KualaLumpur", label: "Kuala Lumpur" },
                                    { value: "Perak", label: "Perak" },
                                    { value: "Pinang", label: "Pinang" },
                                    { value: "Kedah", label: "Kedah" },
                                    { value: "Perlis", label: "Perlis" },
                                    { value: "Terengganu", label: "Terengganu" },
                                    { value: "Kelantan", label: "Kelantan" },
                                    { value: "Sarawak", label: "Sarawak" },
                                    { value: "Sabah", label: "Sabah" }]} returnSelectedState = {this.selectState}
              />
          </div>

          <div>
            <p>Subject</p>
              <AppendDDL isMulti={true} options={[{ value: "IT/Computing", label: "IT/Computing" },
                                                  { value: "Business Administration", label: "Business Administration" },
                                                  { value: "Food Science", label: "Food Science" },
                                                  { value: "Public Relation", label: "Public Relation" },
                                                  { value: "Hotel Management", label: "Hotel Management" }]} returnSelectedSubjects = {this.selectSubjects}
              />
            </div>

            <div>
              <p>{this.state.body}</p>

            </div>

            <div>
            <Button type="submit">Click</Button>

              <Button className="" href="Page">Next Page</Button>
            </div>
            <Example text={this.state.text} />


        </form>
      </div>
    )
  }
}



// create an example class
class Example extends React.Component {
          // we need to add props here as this class will receive props
          constructor(props) {
          super(props);
    this.state = {
          label_text: "Hello World!"
    }
  }

  // this function will run whenever this class is rendered
  componentDidMount() {
          this.setState({ label_text: this.props.text })
        }

  // if the props will update, you need to use this function to catch nextProps
  componentWillReceiveProps(nextProps) {
          console.log(nextProps.text)
    // MUST USE THIS TO VERIFY, else it will loop a lot of time and cause issue
    if (nextProps.text !== this.props.text) {
          // we set label_text to nextProps
          this.setState({ label_text: nextProps.text })
        }
  }
  render() {
    return (
        <span>{this.state.label_text}</span>
    )
  }
}
