import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signIn } from "../../../rudex/slice/firebaseSlice";

const LoadDataAuthStateChanged = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        signIn({
          user: user,
        })
      );
    } else {
    }
  });
};

export default LoadDataAuthStateChanged;
