/* =========================================================
   SANRABI PREMIUM THANK YOU SCREEN
   ========================================================= */

body.success-open {
    overflow: hidden;
}


/* ---------------------------------------------------------
   OVERLAY
   --------------------------------------------------------- */

.sanrabi-success-overlay {
    position: fixed;
    inset: 0;
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px;

    overflow-y: auto;

    opacity: 0;
    visibility: hidden;

    background:
        radial-gradient(
            circle at 10% 20%,
            rgba(96, 165, 250, 0.20),
            transparent 35%
        ),
        radial-gradient(
            circle at 90% 80%,
            rgba(129, 140, 248, 0.22),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #f5f9ff 0%,
            #eef5ff 45%,
            #f7f5ff 100%
        );

    transition:
        opacity 0.35s ease,
        visibility 0.35s ease;
}


.sanrabi-success-overlay.show {
    opacity: 1;
    visibility: visible;
}


/* ---------------------------------------------------------
   BACKGROUND ORBS
   --------------------------------------------------------- */

.success-orb {
    position: absolute;

    border-radius: 50%;

    pointer-events: none;

    filter: blur(2px);

    animation:
        successFloat 7s ease-in-out infinite;
}


.success-orb-one {

    width: 260px;
    height: 260px;

    top: -80px;
    left: -70px;

    background:
        radial-gradient(
            circle,
            rgba(59, 130, 246, 0.18),
            transparent 70%
        );
}


.success-orb-two {

    width: 340px;
    height: 340px;

    right: -120px;
    bottom: -120px;

    background:
        radial-gradient(
            circle,
            rgba(139, 92, 246, 0.20),
            transparent 70%
        );

    animation-delay: -2s;
}


.success-orb-three {

    width: 180px;
    height: 180px;

    right: 15%;
    top: 8%;

    background:
        radial-gradient(
            circle,
            rgba(20, 184, 166, 0.12),
            transparent 70%
        );

    animation-delay: -4s;
}


@keyframes successFloat {

    0%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    50% {
        transform: translate3d(0, -18px, 0);
    }

}


/* ---------------------------------------------------------
   MAIN CARD
   --------------------------------------------------------- */

.success-card {

    position: relative;

    width: min(900px, 100%);

    padding: 55px 60px 38px;

    border-radius: 32px;

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.97),
            rgba(255, 255, 255, 0.88)
        );

    border: 1px solid
        rgba(255, 255, 255, 0.9);

    box-shadow:
        0 35px 100px
        rgba(30, 64, 175, 0.15),

        0 10px 35px
        rgba(15, 23, 42, 0.08),

        inset 0 1px 0
        rgba(255, 255, 255, 1);

    text-align: center;

    transform:
        translateY(30px)
        scale(0.96);

    transition:
        transform 0.5s
        cubic-bezier(.2,.8,.2,1);
}


.sanrabi-success-overlay.show
.success-card {

    transform:
        translateY(0)
        scale(1);
}


/* ---------------------------------------------------------
   CLOSE BUTTON
   --------------------------------------------------------- */

.success-close {

    position: absolute;

    top: 18px;
    right: 20px;

    width: 38px;
    height: 38px;

    border: none;

    border-radius: 50%;

    background: #f1f5f9;

    color: #64748b;

    font-size: 25px;

    line-height: 1;

    cursor: pointer;

    transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
}


.success-close:hover {

    background: #e2e8f0;

    color: #0f172a;

    transform: rotate(90deg);
}


/* ---------------------------------------------------------
   SUCCESS CHECK
   --------------------------------------------------------- */

.success-icon-wrapper {

    position: relative;

    width: 120px;
    height: 120px;

    margin: 0 auto 20px;

    display: flex;

    align-items: center;
    justify-content: center;
}


.success-check {

    position: relative;

    z-index: 3;

    width: 78px;
    height: 78px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            #22c55e,
            #10b981
        );

    box-shadow:
        0 15px 35px
        rgba(16, 185, 129, 0.30);

    animation:
        successPop 0.65s
        cubic-bezier(.17,.89,.32,1.28);
}


.success-check svg {

    width: 48px;
    height: 48px;

    animation:
        checkDraw 0.7s
        ease 0.35s both;
}


.success-icon-ring {

    position: absolute;

    border-radius: 50%;

    border: 1px solid
        rgba(16, 185, 129, 0.15);

    animation:
        ringPulse 2.4s
        ease-out infinite;
}


.ring-one {

    width: 100px;
    height: 100px;
}


.ring-two {

    width: 120px;
    height: 120px;

    animation-delay: 0.4s;
}


@keyframes successPop {

    0% {
        transform: scale(0);
        opacity: 0;
    }

    70% {
        transform: scale(1.08);
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }

}


@keyframes checkDraw {

    from {
        opacity: 0;
        transform: scale(0.6);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }

}


@keyframes ringPulse {

    0% {
        transform: scale(0.85);
        opacity: 0.8;
    }

    100% {
        transform: scale(1.25);
        opacity: 0;
    }

}


/* ---------------------------------------------------------
   TEXT
   --------------------------------------------------------- */

.success-label {

    display: inline-block;

    margin-bottom: 8px;

    padding: 7px 14px;

    border-radius: 999px;

    background: #ecfdf5;

    color: #059669;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1.5px;
}


.success-title {

    margin: 0;

    font-size: clamp(46px, 7vw, 76px);

    line-height: 1;

    letter-spacing: -3px;

    font-weight: 850;

    color: #0f2747;
}


.success-title span {

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #6366f1,
            #8b5cf6
        );

    -webkit-background-clip: text;

    background-clip: text;

    -webkit-text-fill-color: transparent;
}


.success-message {

    max-width: 650px;

    margin:
        24px auto 8px;

    color: #334e75;

    font-size: 19px;

    line-height: 1.65;

    font-weight: 500;
}


.success-submessage {

    max-width: 600px;

    margin: 0 auto;

    color: #64748b;

    font-size: 15px;

    line-height: 1.6;
}


.success-submessage strong {

    color: #2563eb;
}


/* ---------------------------------------------------------
   PROCESS
   --------------------------------------------------------- */

.success-process {

    display: flex;

    align-items: flex-start;

    justify-content: center;

    margin: 38px auto 34px;

    max-width: 750px;
}


.process-item {

    flex: 1;

    min-width: 0;

    display: flex;

    flex-direction: column;

    align-items: center;
}


.process-icon {

    width: 52px;
    height: 52px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: 10px;

    border-radius: 17px;

    background:
        linear-gradient(
            135deg,
            #eff6ff,
            #eef2ff
        );

    color: #2563eb;

    font-size: 21px;

    box-shadow:
        0 7px 20px
        rgba(37, 99, 235, 0.10);
}


.process-item strong {

    color: #17345d;

    font-size: 13px;

    font-weight: 800;
}


.process-item small {

    margin-top: 5px;

    color: #94a3b8;

    font-size: 11px;
}


.process-line {

    flex: 0 1 60px;

    height: 2px;

    margin-top: 25px;

    background:
        linear-gradient(
            90deg,
            #dbeafe,
            #c7d2fe
        );
}


/* ---------------------------------------------------------
   HOME BUTTON
   --------------------------------------------------------- */

.success-home-button {

    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 15px;

    min-width: 210px;

    padding: 15px 27px;

    border: none;

    border-radius: 999px;

    color: white;

    font-size: 15px;

    font-weight: 800;

    cursor: pointer;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #4f46e5,
            #7c3aed
        );

    box-shadow:
        0 14px 30px
        rgba(79, 70, 229, 0.28);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}


.success-home-button:hover {

    transform:
        translateY(-3px);

    box-shadow:
        0 20px 40px
        rgba(79, 70, 229, 0.36);
}


.success-home-button .arrow {

    font-size: 21px;

    transition:
        transform 0.25s ease;
}


.success-home-button:hover .arrow {

    transform:
        translateX(5px);
}


/* ---------------------------------------------------------
   FOOTER
   --------------------------------------------------------- */

.success-footer {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 15px;

    margin-top: 27px;

    color: #7c91b0;

    font-size: 12px;

    line-height: 1.5;
}


.footer-line {

    width: 55px;

    height: 1px;

    background: #dbe5f2;
}


/* ---------------------------------------------------------
   TECHNOLOGY TAGS
   --------------------------------------------------------- */

.success-tags {

    display: flex;

    justify-content: center;

    gap: 8px;

    margin-top: 18px;

    flex-wrap: wrap;
}


.success-tags span {

    padding: 5px 10px;

    border-radius: 999px;

    background: #f8fafc;

    border: 1px solid #e2e8f0;

    color: #64748b;

    font-size: 10px;

    font-weight: 700;
}


/* ---------------------------------------------------------
   CONFETTI
   --------------------------------------------------------- */

.success-confetti {

    position: absolute;

    inset: 0;

    pointer-events: none;

    overflow: hidden;
}


.success-confetti span {

    position: absolute;

    top: 12%;

    width: 8px;
    height: 14px;

    border-radius: 3px;

    opacity: 0;

    animation:
        confettiFall
        2.8s ease-out
        infinite;
}


.success-confetti span:nth-child(1) {
    left: 18%;
    background: #2563eb;
    animation-delay: .1s;
}

.success-confetti span:nth-child(2) {
    left: 28%;
    background: #22c55e;
    animation-delay: .35s;
}

.success-confetti span:nth-child(3) {
    left: 39%;
    background: #8b5cf6;
    animation-delay: .2s;
}

.success-confetti span:nth-child(4) {
    left: 50%;
    background: #f59e0b;
    animation-delay: .5s;
}

.success-confetti span:nth-child(5) {
    left: 62%;
    background: #ec4899;
    animation-delay: .25s;
}

.success-confetti span:nth-child(6) {
    left: 72%;
    background: #06b6d4;
    animation-delay: .6s;
}

.success-confetti span:nth-child(7) {
    left: 82%;
    background: #6366f1;
    animation-delay: .4s;
}

.success-confetti span:nth-child(8) {
    left: 24%;
    background: #f97316;
    animation-delay: .8s;
}

.success-confetti span:nth-child(9) {
    left: 67%;
    background: #10b981;
    animation-delay: .9s;
}

.success-confetti span:nth-child(10) {
    left: 44%;
    background: #3b82f6;
    animation-delay: 1s;
}

.success-confetti span:nth-child(11) {
    left: 88%;
    background: #a855f7;
    animation-delay: .7s;
}

.success-confetti span:nth-child(12) {
    left: 10%;
    background: #14b8a6;
    animation-delay: 1.1s;
}


@keyframes confettiFall {

    0% {
        transform:
            translateY(-40px)
            rotate(0deg);

        opacity: 0;
    }

    15% {
        opacity: 1;
    }

    100% {
        transform:
            translateY(90vh)
            rotate(540deg);

        opacity: 0;
    }

}


/* ---------------------------------------------------------
   FORM ERROR
   --------------------------------------------------------- */

.form-error-message {

    display: flex;

    align-items: center;

    gap: 10px;

    margin-top: 12px;

    padding: 12px 15px;

    border-radius: 12px;

    background: #fff1f2;

    border: 1px solid #fecdd3;

    color: #be123c;

    font-size: 13px;

    font-weight: 600;
}


.error-icon {

    width: 22px;
    height: 22px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #e11d48;

    color: white;

    font-size: 12px;

    font-weight: 900;
}


/* ---------------------------------------------------------
   LOADING
   --------------------------------------------------------- */

.loading-spinner {

    display: inline-block;

    width: 15px;
    height: 15px;

    margin-right: 7px;

    vertical-align: -2px;

    border: 2px solid
        rgba(255,255,255,.4);

    border-top-color: white;

    border-radius: 50%;

    animation:
        spinner .7s linear infinite;
}


@keyframes spinner {

    to {
        transform: rotate(360deg);
    }

}


/* =========================================================
   MOBILE RESPONSIVE
   ========================================================= */

@media (max-width: 768px) {

    .sanrabi-success-overlay {

        padding: 15px;

        align-items: flex-start;
    }


    .success-card {

        margin: 15px 0;

        padding:
            45px 22px 28px;

        border-radius: 25px;
    }


    .success-icon-wrapper {

        width: 100px;
        height: 100px;
    }


    .success-check {

        width: 68px;
        height: 68px;
    }


    .ring-one {

        width: 88px;
        height: 88px;
    }


    .ring-two {

        width: 105px;
        height: 105px;
    }


    .success-title {

        font-size: 48px;

        letter-spacing: -2px;
    }


    .success-message {

        font-size: 16px;

        margin-top: 18px;
    }


    .success-submessage {

        font-size: 13px;
    }


    .success-process {

        display: grid;

        grid-template-columns:
            repeat(2, 1fr);

        gap: 20px;

        margin-top: 30px;
    }


    .process-line {

        display: none;
    }


    .process-item {

        width: 100%;
    }


    .success-footer {

        font-size: 10px;

        padding: 0 10px;
    }


    .footer-line {

        width: 25px;
    }


    .success-home-button {

        width: 100%;

        max-width: 260px;
    }

}


@media (max-width: 400px) {

    .success-title {

        font-size: 42px;
    }


    .success-card {

        padding-left: 18px;
        padding-right: 18px;
    }

}