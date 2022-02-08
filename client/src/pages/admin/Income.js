// import packages

// import component

// import assets
import cssModules from "../../assets/css/Income.module.css";
import check from "../../assets/img/check.svg";
import cancel from "../../assets/img/cancel.svg";

function Income() {
  return (
    <>
      <div className={cssModules.incomeBody}>
        <h1>Income Transaction</h1>
        <table>
          <thead>
            <tr>
              <th className={cssModules.five}>No</th>
              <th className={cssModules.fifteen}>Name</th>
              <th className={cssModules.twentyfive}>Address</th>
              <th className={cssModules.ten}>Post Code</th>
              <th className={cssModules.ten}>Income</th>
              <th className={cssModules.fifteen}>Status</th>
              <th className={cssModules.fifteen}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={cssModules.numbers}>1</td>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td className={cssModules.postal}>16820</td>
              <td className={cssModules.income}>69.000</td>
              <td style={{ color: "#FF9900" }} className={cssModules.status}>
                Waiting Approve
              </td>
              <td className={cssModules.actionBtn}>
                <div>
                  <button className={cssModules.cancelBtn}>Cancel</button>
                  <button className={cssModules.approveBtn}>Approve</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className={cssModules.numbers}>2</td>
              <td>Haris Gams</td>
              <td>Serang</td>
              <td className={cssModules.postal}>42111</td>
              <td className={cssModules.income}>30.000</td>
              <td style={{ color: "#78A85A" }} className={cssModules.status}>
                Success
              </td>
              <td className={cssModules.actionBtn}>
                <img src={check} alt="Success" />
              </td>
            </tr>
            <tr>
              <td className={cssModules.numbers}>3</td>
              <td>Aziz Union</td>
              <td>Bekasi</td>
              <td className={cssModules.postal}>13450</td>
              <td className={cssModules.income}>28.000</td>
              <td style={{ color: "#E83939" }} className={cssModules.status}>
                Cancel
              </td>
              <td className={cssModules.actionBtn}>
                <img src={cancel} alt="Cancel" />
              </td>
            </tr>
            <tr>
              <td className={cssModules.numbers}>4</td>
              <td>Lae Tanjung Balai</td>
              <td>Tanjung Balai</td>
              <td className={cssModules.postal}>21331</td>
              <td className={cssModules.income}>30.000</td>
              <td style={{ color: "#00D1FF" }} className={cssModules.status}>
                On The Way
              </td>
              <td className={cssModules.actionBtn}>
                <img src={check} alt="Success" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Income;
