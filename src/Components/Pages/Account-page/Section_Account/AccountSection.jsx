import "./AccountSection.css";
import AccountTable from "./AccountTable";
import ListPageAccount from "./ListPageAccount";

export default function AccountSection() {
  return (
    <div className="display_screen">
      <AccountTable initialName={"My Accounts"} />
    </div>
  );
}
