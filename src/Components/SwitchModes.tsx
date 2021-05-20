import { FC } from "react";
import styles from "../Styles/switchmodes.module.sass";

import { Icon } from "@iconify/react";
import sunIcon from "@iconify-icons/uil/sun";
import moonIcon from "@iconify-icons/uil/moon";
import { useStoreActions, useStoreState } from "../Store/typedhooks";

const SwitchModes: FC = () => {
	const toggleNightMode = useStoreActions((actions) => actions.toggleNightMode);
	const nightMode = useStoreState((state) => state.nightMode);

	const handleToggle = () => {
		toggleNightMode();
	};
	return (
		<div className={styles.wrapper + ` ${nightMode ? styles.dark : ""}`}>
			<div className={styles.with_icon} id={styles.sun_icon}>
				<Icon icon={sunIcon} width={22} />
			</div>
			<div className={styles.switch} onClick={handleToggle}>
				<div className={styles.circle}></div>
			</div>
			<div className={styles.with_icon} id={styles.moon_icon}>
				<Icon icon={moonIcon} width={18} />
			</div>
		</div>
	);
};

export default SwitchModes;
