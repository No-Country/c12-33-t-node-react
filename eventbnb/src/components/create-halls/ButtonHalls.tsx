import Link from "next/link";
import { FC } from "react";
import { BiArrowBack } from "react-icons/bi";

interface Props {
  href: string;
  content: string;
  color: string;
  backBtn: boolean;
  hrefPrev:string;
}

const ButtonHalls: FC<Props> = ({ href, content, color, backBtn, hrefPrev }) => {
  if (!backBtn) {
    return (
      <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-2 flex items-center justify-end">
        <Link
          className={`bg-${color}-700 px-6 py-2 text-white rounded-md font-semibold`}
          href={href}
        >
          {content}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-2 flex items-center">
        <div className="flex items-center justify-between absolute inset-x-0 gap-x-2">
          <Link className="justify-items-start ml-8 mt-10" href={hrefPrev}><BiArrowBack/></Link>
          <Link
            className={`bg-${color} px-6 py-2 mr-8 mt-10 justify-items-end rounded-md text-white font-semibold `}
            href={href}
          >
            {content}
          </Link>
        </div>
      </div>
    );
  }
};

export default ButtonHalls;
