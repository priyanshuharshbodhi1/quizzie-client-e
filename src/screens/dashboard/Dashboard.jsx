import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import ImpressionsIcon from "../../assets/images/impressions.svg";
import DeleteIcon from "../../assets/images/delete-icon.svg";
import EditIcon from "../../assets/images/edit-icon.svg";
import ShareIcon from "../../assets/images/share-icon.svg";

const Dashboard = () => {
  const [activeScreen, setActiveScreen] = useState("dashboard");

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <div className={styles.logo}>QUIZZIE</div>
          <div className={styles.modesContainer}>
            <button
              className={`${styles.modeBtn} ${
                activeScreen === "dashboard" ? styles.activeScreen : ""
              }`}
              onClick={() => setActiveScreen("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`${styles.modeBtn} ${
                activeScreen === "analytics" ? styles.activeScreen : ""
              }`}
              onClick={() => setActiveScreen("analytics")}
            >
              Analytics
            </button>
            <button
              className={`${styles.modeBtn} ${
                activeScreen === "createQuiz" ? styles.activeScreen : ""
              }`}
              onClick={() => setActiveScreen("createQuiz")}
            >
              Create Quiz
            </button>
          </div>
          <hr />
          <button className={styles.logoutBtn}>LOGOUT</button>
        </div>
        <div className={styles.subContainer}>
          {activeScreen === "dashboard" && (
            <div className={styles.dashboardScreen}>
              <div className={styles.dashboardMainCard}>
                <div className={styles.totalQuiz}>{}Quiz Created</div>
                <div className={styles.totalQuestions}>{}Questions Created</div>
                <div className={styles.totalImpressions}>{}Impressions</div>
              </div>
              <div>
                <h2>Trending Quiz</h2>
                <div className={styles.trendingQuizCard}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className={styles.quizName}>Quiz 1</div>
                    <div className={styles.impressions}>667 </div>
                    <img src={ImpressionsIcon} alt="" />
                  </div>
                  <div className={styles.creationDate}>
                    Created on : 04 Sep, 2023
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeScreen === "analytics" && (
            <div style={{marginLeft:"auto", marginRight:"auto"}}>
              <div className={styles.analyticsScreen}>
                <h1 className={styles.analyticsHeading}>Quiz Analytics</h1>
                <table className={styles.analyticsTable}>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Quiz Name</th>
                      <th>Created on</th>
                      <th>Impression</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Quiz 1</td>
                      <td>01 Sep, 2023</td>
                      <td>345</td>
                      <td>
                        <img src={EditIcon} alt="" />
                        <img src={DeleteIcon} alt="" />
                        <img src={ShareIcon} alt="" />
                      </td>
                      <td>Question Wise Analysis</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Quiz 2</td>
                      <td>04 Sep, 2023</td>
                      <td>667</td>
                      <td>
                        <img src={EditIcon} alt="" />
                        <img src={DeleteIcon} alt="" />
                        <img src={ShareIcon} alt="" />
                      </td>
                      <td>Question Wise Analysis</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Quiz 3</td>
                      <td>06 Sep, 2023</td>
                      <td>1.6K</td>
                      <td>
                        <img src={EditIcon} alt="" />
                        <img src={DeleteIcon} alt="" />
                        <img src={ShareIcon} alt="" />
                      </td>
                      <td>Question Wise Analysis</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Quiz 4</td>
                      <td>09 Sep, 2023</td>
                      <td>789</td>
                      <td>
                        <img src={EditIcon} alt="" />
                        <img src={DeleteIcon} alt="" />
                        <img src={ShareIcon} alt="" />
                      </td>
                      <td>Question Wise Analysis</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Quiz 5</td>
                      <td>11 Sep, 2023</td>
                      <td>995</td>
                      <td>
                        <img src={EditIcon} alt="" />
                        <img src={DeleteIcon} alt="" />
                        <img src={ShareIcon} alt="" />
                      </td>
                      <td>Question Wise Analysis</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Quiz 6</td>
                      <td>13 Sep, 2023</td>
                      <td>2.5K</td>
                      <td>
                        <img src={EditIcon} alt="" />
                        <img src={DeleteIcon} alt="" />
                        <img src={ShareIcon} alt="" />
                      </td>
                      <td>Question Wise Analysis</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Quiz 7</td>
                      <td>14 Sep, 2023</td>
                      <td>231</td>
                      <td>
                        <img src={EditIcon} alt="" />
                        <img src={DeleteIcon} alt="" />
                        <img src={ShareIcon} alt="" />
                      </td>
                      <td>Question Wise Analysis</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Quiz 8</td>
                      <td>17 Sep, 2023</td>
                      <td>1.3K</td>
                      <td>
                        <img src={EditIcon} alt="" />
                        <img src={DeleteIcon} alt="" />
                        <img src={ShareIcon} alt="" />
                      </td>
                      <td>Question Wise Analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeScreen === "createQuiz" && (
            <div className={styles.createQuizScreen}></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
