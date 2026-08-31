"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export default function Preloader() {
  const [currentStage, setCurrentStage] = useState(0); // 0: checkout, 1: build, 2: test, 3: deploy
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState("fetching git tree...");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    document.body.classList.add("is-loading");

    const timer1 = setTimeout(() => {
      setCurrentStage(1);
      setPercent(32);
      setStatusText("provisioning container runners...");
    }, 450);

    const timer2 = setTimeout(() => {
      setCurrentStage(2);
      setPercent(68);
      setStatusText("running automated tests & linting...");
    }, 900);

    const timer3 = setTimeout(() => {
      setCurrentStage(3);
      setPercent(99);
      setStatusText("deploying to production...");
    }, 1350);

    const timer4 = setTimeout(() => {
      setCurrentStage(4);
      setPercent(100);
      setStatusText("cluster ready ✓");
      setIsDone(true);
      document.body.classList.remove("is-loading");
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      document.body.classList.remove("is-loading");
    };
  }, []);

  const stages = [
    { label: "checkout", key: 0 },
    { label: "build", key: 1 },
    { label: "test", key: 2 },
    { label: "deploy", key: 3 }
  ];

  return (
    <div className={`preloader ${isDone ? "is-done" : ""}`} aria-hidden={isDone}>
      <div className="preloader__scan" />
      <div className="preloader__glow" />

      <div className="boot">
        <div className="boot__cmd">
          <span className="prompt">santhosh@devops-node:~$</span> git log --oneline -n 1
          <span className="caret" />
        </div>

        <div className="pipeline">
          <div className="pipeline__track">
            <div
              className="pipeline__fill"
              style={{ width: `${percent}%` }}
            />
          </div>

          {stages.map((stg) => {
            const isStageDone = currentStage > stg.key;
            const isStageActive = currentStage === stg.key;
            return (
              <div
                key={stg.key}
                className={`stage ${isStageDone ? "is-done" : ""} ${
                  isStageActive ? "is-active" : ""
                }`}
              >
                <div className="stage__dot">
                  <span className="default">●</span>
                  <span className="spin" />
                  <Check className="stage__check" style={{ width: 14, height: 14 }} />
                </div>
                <span className="stage__label">{stg.label}</span>
              </div>
            );
          })}
        </div>

        <div className="boot__foot">
          <div className="boot__status">
            <span>status: </span>
            <span className={isDone ? "ok" : ""}>{statusText}</span>
          </div>
          <div className="boot__pct tnum">
            {percent}
            <span className="s">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
