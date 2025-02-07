import { Film, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className=" w-[100%] h-[240px] bg-[#4338CA]   mt-[40px]">
      <div className=" m-auto max-w-[1280px] w-[100%] flex gap-[128px] ">
        <div className=" w-[247px] h-[200px] mt-[40px]">
          <div className="flex gap-2">
            <Film className="text-white w-[18px]" />
            <p className="text-white font-extrabold italic">Movie Z</p>
          </div>
          <p className="text-white text-sm font-normal">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="flex text-white w-[913px] h-[200px] justify-end gap-[40px] mt-[40px]">
          <div className="text-white  ">
            <p>Contact information</p>
            <div className="flex items-center mt-4 ">
              <Mail className=" w-[16px]" />
              <p className=" ml-4">
                Email <br />
                munkhtemuulen0809@gmail.com
              </p>
            </div>
            <div className="flex items-center mt-4">
              <Phone className="w-[16px]" />
              <p className=" ml-4">
                Phone number <br />
                (+976) 99752257
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium">
              Follow us <br />
              Facebook Instagram Twitter Youtube
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
