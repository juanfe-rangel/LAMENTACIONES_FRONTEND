import React, { type RefObject } from "react";
import { JoinButtonPanelSection } from "./JoinButtonPanelSection";
import { JoinSpecButton } from "./JoinSpecButton";
import { RefreshButtonPanel } from "./RefreshButtonPanel";


type props = {
    full : boolean;
    formRef : RefObject<HTMLFormElement | null>;
}

export const SectionPanelPopUp :React.FC<props> = ({full,formRef}) =>{
    return(
        <div className="grid grid-cols-2 gap-4">
            <JoinButtonPanelSection fullRoom={full}/>
            <JoinSpecButton />
            <RefreshButtonPanel formRef={formRef}/>
        </div>
    );
}