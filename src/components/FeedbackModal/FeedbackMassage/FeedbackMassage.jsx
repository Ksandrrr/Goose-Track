import Style from './FeedbackMassage.module.scss';
import { useSelector } from 'react-redux';
import { StarsReviews } from '../../ReviewsSlider/StarsReviews';
import { getReviews } from '../../../redux/reviews/reviews-selectors';
// import { FaUserSecret } from 'react-icons/fa';
// import { IconContext } from 'react-icons';
// import { getUser } from '../../../redux/auth/auth-selectors';
export const FeedbackMassage = () => {
  // const User = useSelector(getUser);
  const theme = useSelector(state => state.theme.value);
  const reviews = useSelector(getReviews);
  const element = reviews.map(({ rating, comment, name, _id,avatarURL }) => (
    <div
      key={_id}
      className={!theme ? Style.wrapperText : Style.wrapperTextLight}
    >
      <div className={Style.wrapperUser}>
        <img className={Style.PhotoUser} src={avatarURL} alt="UserPhoto" />
       
        <div className={Style.reviewsHeader}>
          <p className={!theme ? Style.NameUser : Style.NameUserLight}>
            {name}
          </p>
          <StarsReviews stars={Number(rating)} />
        </div>
      </div>
      <div>
        <p className={!theme ? Style.Subscript : Style.SubscriptLight}>
          {comment}
        </p>
      </div>
    </div>
  ));

  return (
    <div className={theme ? Style.WrapperMassage : Style.WrapperMassageDark}>
      <div className={theme ? Style.feedback : Style.feedbackDark}>
        {element}
      </div>
    </div>
  );
};
