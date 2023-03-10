import React from "react";
import { useIntl } from "react-intl";
import { postDone } from "../../../../api/api";
import useStore from "../../../../store/store.js";
import { selectRemoveBeskjed } from "../../../../store/selectors.js";
import { logAmplitudeEvent } from "../../../../utils/amplitude";
import style from "./ArkiverKnapp.module.css";
import { Varsel } from "../../../main-page/MainPage";

type Props = {
  eventId: string;
  setIsHover: (setIsHover: boolean) => void;
  varsel: Varsel;
};

const ArkiverKnapp = ({ eventId, setIsHover, varsel }: Props) => {
  const translate = useIntl();
  const removeBeskjed = useStore(selectRemoveBeskjed);

  const handleOnClick = () => {
    postDone({ eventId: eventId });
    logAmplitudeEvent("Arkivert beskjed");
    removeBeskjed(varsel);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <button
      className={style.arkiverBtn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      {translate.formatMessage({ id: "arkiver.knapp" })}
    </button>
  );
};

export default ArkiverKnapp;
