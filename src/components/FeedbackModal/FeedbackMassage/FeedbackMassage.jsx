import Style from "./FeedbackMassage.module.scss"
import { useSelector } from 'react-redux';
import { StarsReviews } from "../../ReviewsSlider/StarsReviews"

export const FeedbackMassage = () => {
    const theme = useSelector(state => state.theme.value);
    
    return (
      <div className={theme ? Style.WrapperMassage : Style.WrapperMassageDark}>
        <div className={theme ? Style.feedback : Style.feedbackDark}>
                
          <div>
            <div className={Style.wrapperText}>
              <div className={Style.wrapperUser}>
                <p className={Style.PhotoUser}></p>
                <div>
                  <p className={Style.NameUser}>Olena Doe </p>
                  <StarsReviews stars={4} />
                </div>
              </div>
              <div>
                <p className={Style.Subscript}>
                  GooseTrack is impressive, the calendar view and filter options
                  make it easy to stay organized and focused. Highly
                  recommended.
                </p>
              </div>
            </div>
          </div>

         <div>
            <div className={Style.wrapperText}>
              <div className={Style.wrapperUser}>
                <p className={Style.PhotoUser}></p>
                <div>
                  <p className={Style.NameUser}>Olena Doe </p>
                  <StarsReviews stars={4} />
                </div>
              </div>
              <div>
                <p className={Style.Subscript}>
                  GooseTrack is impressive, the calendar view and filter options
                  make it easy to stay organized and focused. Highly
                  recommended.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className={Style.wrapperText}>
              <div className={Style.wrapperUser}>
                <p className={Style.PhotoUser}></p>
                <div>
                  <p className={Style.NameUser}>Olena Doe </p>
                  <StarsReviews stars={4} />
                </div>
              </div>
              <div>
                <p className={Style.Subscript}>
                  GooseTrack is impressive, the calendar view and filter options
                  make it easy to stay organized and focused. Highly
                  recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
} 