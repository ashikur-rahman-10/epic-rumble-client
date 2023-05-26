import { useEffect } from "react";

const useCustomTitle = (title) => {
    useEffect(() => {
        document.title = `Epic Rumble-${title}`;

        return () => {

            // document.title = "Default Title";
        };
    }, [title]);
};

export default useCustomTitle;
