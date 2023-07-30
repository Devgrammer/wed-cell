
import { GiDiamondRing } from "react-icons/gi";
import { BsPlus } from "react-icons/bs";
import { BsEnvelopePaper } from "react-icons/bs";
import { TbCameraHeart } from "react-icons/tb";
import { SlHome } from "react-icons/sl";
import { PiBookBookmarkLight } from "react-icons/pi";


const VendorManager = () => {

    let icon_color = "#ffffff";
    let icon_size = '100%';
    // Further extension or removal of navabar menu items can be done by modifying the list
    let SubMenuLinkData = [
        {
            id: 1,
            icon: <BsEnvelopePaper color={ icon_color } size={ icon_size } />,
            data: [],
        },
        {
            id: 2,
            icon: <TbCameraHeart color={ icon_color } size={ icon_size } />,
            data: [],
        },
        {
            id: 3,
            icon: <GiDiamondRing color={ icon_color } size={ icon_size } />,
            data: [],
        },
        {
            id: 4,
            icon: <SlHome color={ icon_color } size={ icon_size } />,
            data: [],
        },

        {
            id: 5,
            icon: <PiBookBookmarkLight color={ icon_color } size={ icon_size } />,
            data: [],
        },
    ];

    const sizeGenerator = (index) => {
        if (index === 2) {
            return " w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:h-64 lg:w-64 bg-pink-600 hover:bg-pink-600";
        }
        else if (index === 1 || index === 3) {
            return "w-20 h-20 sm:w-32 sm:h-32  lg:h-56 lg:w-56 bg-pink-500 hover:bg-pink-600";
        }
        else if (index === 0 || index === 4) {
            return "w-14 h-14 sm:w-24 sm:h-24 lg:h-48 lg:w-48 bg-pink-400 hover:bg-pink-600";
        }

    }


    return (
        <div className="vendor-manager-container w-full bg-transparent mt-16 flex flex-col gap-y-8 ">
            <div className="vendor-manager-header flex flex-col gap-y-4">
                <div className="vendor-manager-title text-2xl">Vendor Manager</div>
                <div className="vendor-manager-stat text-sm text-gray-600 font-regular ">0 of 20 VENDORS BOOKED</div>
            </div>

            <div className="vendor-card-carasoule w-full grid grid-flow-col items-center justify-center grid-col-7  box-border">

                { SubMenuLinkData &&
                    SubMenuLinkData.map((Item, index) => {
                        return (
                            <div
                                className={ `menu-item-contianer flex drop-shadow-2xl ${sizeGenerator(index)} border-0 items-center bg-[#FF1F70] rounded-lg flex justify-center  ` }
                                key={ `nav-item-${index}` }
                            >
                                <div className="item-wrapper max-w-fit max-h-fit flex flex-col justify-center items-center  gap-y-2 md:gap-y-4">
                                    <div className="menu-item-icon flex justify-center items-center outline-sm w-1/4">
                                        { Item.icon }
                                    </div>
                                    <div className="menu-link-text flex text-black text-[6px] px-1 md:text-sm bg-white rounded-md md:px-2 capitalize h-4 md:h-8 max-w-fit items-center box-border justify-center  hover:text-red-500 ">
                                        <span><BsPlus /></span> ADD
                                    </div>
                                </div>
                            </div>
                        );
                    }) }
            </div>

        </div>
    )
}

export default VendorManager