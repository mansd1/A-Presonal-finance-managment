export default function ListPageAccount() {
  return (
    <>
      <section className="Account_section_nav">
        <article className="list_with">
          <div className="list_nav">
            <ul className="grid_list">
              <li>
                <i class="ri-home-7-line"></i>
                <a href="#home">Home</a>
              </li>
              <li>
                <i class="ri-wallet-2-fill"></i>
                <a href="#Account">Account</a>
              </li>
              <li>
                <i class="ri-dashboard-horizontal-fill"></i>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i class="ri-arrow-up-down-line"></i>
                <a href="#">Transaction</a>
              </li>
              <li>
                <i class="ri-calendar-event-line"></i>
                <a href="#">Budgets</a>
              </li>
              <li>
                <i class="ri-flag-2-fill"></i>
                <a href="#">Goals</a>
              </li>
              <li>
                <i class="ri-calendar-todo-fill"></i>
                <a href="#">Debts</a>
              </li>
              <li>
                <i class="ri-file-list-line"></i>
                <a href="#">Reports</a>
              </li>
            </ul>
          </div>
          <button> Add </button>
        </article>
      </section>
    </>
  );
}
