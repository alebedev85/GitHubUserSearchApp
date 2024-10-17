import { LocalGithubUser } from "types";
import { StatInfo } from "components/StatInfo";
import styles from "./UserStat.module.scss";

export interface UserStatProps
  extends Pick<LocalGithubUser, "repos" | "followers" | "following"> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <StatInfo title="Repos" data={repos}/>
    <StatInfo title="Followers" data={followers}/>
    <StatInfo title="Following" data={following}/>
  </div>
);
