import { SlCalender } from "react-icons/sl";
import { CardLineIcon } from "./CardIcon";


export default function CardIconList(props){
    return (
        <div className="flex">
        {props.event.socials &&
          props.event.socials.map((social) => (
            <div className="ml-2">
              <CardLineIcon
                iconText={social.name}
                icon={social.icon}
                tooltip={social.name}
                url={social.url}
              />
            </div>
          ))}
      </div>

    )
}