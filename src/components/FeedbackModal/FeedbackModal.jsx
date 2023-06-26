import Style from './FeedbackModal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { StarRating } from './StarRating/StarRating';
import { FeedbackMassage } from './FeedbackMassage/FeedbackMassage';
import { useSelector } from 'react-redux';

export const FeedbackModal = ({ setFeedback }) => {
  const theme = useSelector(state => state.theme.value);

  return (
    <div className={Style.FeedbackModalWrapper}>
      <div className={theme ? Style.ModalFeedback : Style.ModalFeedbackDark}>
        <button
          className={Style.modalbtnClose}
          onClick={() => setFeedback(false)}
        >
          <IconContext.Provider value={{ size: '24px', color: !theme ? 'white' : 'black' }}>
            <MdOutlineClose />
          </IconContext.Provider>
        </button>
        <div className={Style.Wrapperblock}>
          <p className={theme ? Style.TextRating : Style.TextRatingDark}>
            Rating
          </p>
          <StarRating />
        </div>
        <div>
          <p className={theme ? Style.TextRating : Style.TextRatingDark}>
            Review
          </p>
          <textarea
            className={theme ? Style.InputText : Style.InputTextDark}
            placeholder="Enter text"
            rows="5"
          ></textarea>
        </div>
        <button className={Style.BtnSave}>Save</button>
        <FeedbackMassage />
      </div>
    </div>
  );
};
