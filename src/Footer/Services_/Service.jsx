import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./Service.css";
const Service = () => {
  return (
    <div className="ServiceContainer">
      <div className="serviceCard">
        <span className="serviceIcon1">
          <TbTruckDelivery />
        </span>
        <p className="serviceDescription">Super Fast And Free Delivery</p>
      </div>
      <div>
        <div className="serviceCard">
          <span className="serviceIcon">
            <BiShieldQuarter />
          </span>
          <p className="serviceDescription">Non-Contact Shipping</p>
        </div>
        <div className="serviceCard">
          <span className="serviceIcon">
            <GiTakeMyMoney />
          </span>
          <p className="serviceDescription">Money-Back Guaranteed</p>
        </div>
      </div>
      <div className="serviceCard">
        <span className="serviceIcon1">
          <RiSecurePaymentLine />
        </span>
        <p className="serviceDescription">Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Service;
