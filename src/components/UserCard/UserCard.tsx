import { UserStat } from "components/UserStat";
import styles from "./UserCard.module.scss";
import { LocalGithubUser } from "types";
import { UserTitle } from "components/UserTitle";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img className={styles.avatar} src={props.avatar} alt={props.login} />
    <UserTitle name={props.name} login={props.login} created={props.created} />
    <p className={`${styles.bio}${props.bio ? '': `${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
