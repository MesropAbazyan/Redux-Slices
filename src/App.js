import { useDispatch, useSelector } from "react-redux";
import { editName, selectName } from "./features/currentUser/currentUserSlice";

function App() {
        // const name = useSelector(function(state) {
        //   return state.currentUser.name;
        // });
  const name = useSelector(selectName);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{name}</h1>

      <input 
        type='text'
        value={name}
        onChange={(evt) => {
                // dispatch({
                //   type: 'edit-current-user-name',
                //   payload: {
                //     name: evt.target.value
                //   }
                // });
          dispatch(editName(evt.target.value));
        }}
      />
    </div>
  );
}

export default App;
