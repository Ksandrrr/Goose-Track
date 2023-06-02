

import { Calendar } from './Calendar';
import { SideBar } from './SideBar';
import { Allin } from "./All"
import {Reviews} from "../ReviewsSlider/ReviewsSlider"
export const Description = () => {
  return (
    <section className="container">
      <Calendar />
          <SideBar />
      <Allin />
      <Reviews/>
    </section>
  );
};
