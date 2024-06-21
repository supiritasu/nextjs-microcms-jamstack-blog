import {
    TwitterShareButton,
    TwitterIcon,
  } from "react-share";

export function SnsShare(props) {
    const { url, title } = props;  
    return (
     <div className="text-center">
          <TwitterShareButton
           url={url}
           title={title}
          >
           <TwitterIcon size={32} round />
          </TwitterShareButton>
     </div>
    );
}