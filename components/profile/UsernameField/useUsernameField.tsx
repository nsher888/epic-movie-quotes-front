import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";

const useUsernameField = () => {
	const user = useSelector((state: RootState) => state.user.user);

	return {
		user,
	};
};
export default useUsernameField;
