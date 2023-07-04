import Style from './FeedbackModal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { StarRating } from './StarRating/StarRating';
import { FeedbackMassage } from './FeedbackMassage/FeedbackMassage';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { addReviews } from '../../redux/reviews/reviews-operation';
import { useDispatch } from 'react-redux';
import { isfedbackLoading } from '../../redux/reviews/reviews-selectors';
import { Loader } from '../Loader/Loader';
export const FeedbackModal = ({ setFeedback }) => {
  const loading = useSelector(isfedbackLoading);
  const theme = useSelector(state => state.theme.value);
  const [comment, setComment] = useState('');
  const [star, setStar] = useState('');
  const [error, setError] = useState(false);
  const [errorComent, setErrorComent] = useState(false);
  const dispatch = useDispatch();

  const hendlSubmit = e => {
    const feedback = {
      rating: star.toString(),
      comment: comment,
    };
    if (star === '') {
      setError(true);
      return;
    } else {
      setError(false);
    }
    if (comment === '') {
      setErrorComent(true);
      return;
    } else {
      setErrorComent(false);
    }
    dispatch(addReviews(feedback));
    setComment('');
  };

  return (
    <div className={Style.FeedbackModalWrapper}>
      <div className={theme ? Style.ModalFeedback : Style.ModalFeedbackDark}>
        <button
          className={Style.modalbtnClose}
          onClick={() => setFeedback(false)}
        >
          <IconContext.Provider
            value={{ size: '24px', color: !theme ? 'white' : 'black' }}
          >
            <MdOutlineClose />
          </IconContext.Provider>
        </button>
        <div className={Style.Wrapperblock}>
          <p
            className={
              theme
                ? error
                  ? Style.TextRatingError
                  : Style.TextRating
                : error
                ? Style.TextRatingError
                : Style.TextRatingDark
            }
          >
            Rating
          </p>
          <StarRating star={star} setStar={setStar} />
        </div>
        <div>
          <p className={theme ? Style.TextRating : Style.TextRatingDark}>
            Review
          </p>
          <textarea
            className={
              theme
                ? errorComent
                  ? Style.InputTextErorLight
                  : Style.InputText
                : errorComent
                ? Style.InputTextErrorDark
                : Style.InputTextDark
            }
            placeholder="Enter text"
            rows="5"
            onChange={e => setComment(e.target.value)}
            value={comment}
          ></textarea>
        </div>
        <button className={Style.BtnSave} onClick={hendlSubmit}>
          Save
        </button>
        <FeedbackMassage />
      </div>
      {loading && (
        <div className={Style.wrapperLoader}>
          <Loader />
        </div>
      )}
    </div>
  );
};
