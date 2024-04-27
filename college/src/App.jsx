import { act, useReducer } from "react";
import './App.css'

const formState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: ""
      }
    },
    state: "",
    coordinates: { latitude: "", longitude: "" }
  },
  courses_offered: [],
  isSubmitted: false
};

const Formreducer = (state, action) => {
  switch (action.type) {
    case "name":
    case "establishment_year":
    case "building":
    case "street":
    case "city":
    case "pinCode":
    case "landmark":
    case "state":
    case "latitude":
    case "longitude":
    case "courses_offered":
      return { ...state, [action.type]: action.payload };
    case "submit":
      return { ...state, isSubmitted: true };
    case "reset":
      return { ...formState };
    default:
      throw new Error("Invalid action type");
  }
};

function App() {
  const [state,dispatch] = useReducer(Formreducer,formState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'submit' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset'});
  };
  return (
    <div className="container">
      <h1>Add College</h1>
      {!state.isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            College Name:
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Establishment Year:
            <input
              type="text"
              name="establishment_year"
              value={state.establishment_year}
              onChange={handleChange}
            />
          </label>
          <br />
          <h2>Address Details:</h2>
          <label>
            Building:
            <input
              type="text"
              name="building"
              value={state.building}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Street:
            <input
              type="text"
              name="street"
              value={state.street}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            City:
            <input
              type="text"
              name="city"
              value={state.city}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Pincode:
            <input
              type="text"
              name="pinCode"
              value={state.pinCode}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Landmark:
            <input
              type="text"
              name="landmark"
              value={state.landmark}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            State:
            <input
              type="text"
              name="state"
              value={state.state}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Latitude:
            <input
              type="text"
              name="latitude"
              value={state.latitude}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Longitude:
            <input
              type="text"
              name="longitude"
              value={state.longitude}
              onChange={handleChange}
            />
          </label>
          <br />
          <select name="courses_offered" onChange={handleChange} ue={state.courses_offered.length > 0 ? state.courses_offered[0] : ''} >
            <option value="">Course List</option>
            <option value="BA">BA</option>
            <option value="B.Sci">B.Sci</option>
            <option value="B.Com">B.Com</option>
            <option value="B.Ed">B.Ed</option>
            <option value="B.E">B.E</option>
          </select>     
          <br />
          <button type="submit">Submit</button>
        
        </form> ) : (
        <div>
          <h2>Entered College Details:</h2>
          <div>
            <p>College Name: {state.name}</p>    
            <p>Establishment year: {state.establishment_year} </p>
            <p>Building: {state.building}</p>
            <p>Street: {state.street}</p>
            <p>City: {state.city}</p>
            <p>Pincode: {state.pinCode}</p>
            <p>Landmark: {state.landmark}</p>
            <p>State: {state.state}</p>
            <p>Latitude: {state.latitude}</p>
            <p>Longitude: {state.longitude}</p>
            <p>Course: {state.courses_offered}</p>
          </div>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App
