function out(){
    document.write(`<style>
   body {
    background-color: rgb(235, 172, 161);
    height: 100vh;
  }
  .tittle{
    position:relative;
    font-weight: 800;
    top:40px;
    left:50%;
    transform: translate(-50%);
    color: white;
    font-family: arial, helvetica, roboto, "new times roman", lato;
  }
  .tittle1{
    position:absolute;
    top:-10px;
    left:50%;
    transform: translate(-50%);
    color: rgb(36, 35, 35);
    font-family: arial, helvetica, roboto, "new times roman", lato;
  }
  .peson{
    align-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgb(255, 116, 116);
    width: 150px;
    height: 150px;
    border-radius: 100px;
    border: none;
  }
  .peson2{
    align-content: center;
    position: absolute;
    top: 20%;
    left: -33%;
    color: white;
    transform: translate(-50%,-50%);
    background-color: rgb(216, 97, 97);
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: none;
  }
  .peson #label{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Times New Roman', Times, serif;
    color: white;
    font-size: 30px;
    width: 500px;
    font-weight: 300;
    -webkit-text-stroke: 2px black;
    position:absolute;
    left: 160%;
  }
  </style>
    <title>PesonMania</title>
  <div class="d-flex h-100">
    <div class="tittle">
     <svg width="181" height="81" viewBox="0 0 181 81" fill="none" xmlns="http://www.w3.org/2000/svg" style="top:-30px;">
  <path d="M28.6994 14.1823C28.6994 15.9998 28.2461 17.6611 27.3396 19.1663C26.4632 20.643 25.1185 21.8357 23.3054 22.7445C21.5226 23.6249 19.3318 24.0651 16.733 24.0651H12.3363V34.2034H3.45215V4.1717H16.733C19.3015 4.1717 21.4772 4.59769 23.2601 5.44965C25.0732 6.30161 26.433 7.48016 27.3396 8.9853C28.2461 10.4904 28.6994 12.2228 28.6994 14.1823ZM15.8718 17.4197C18.3799 17.4197 19.6339 16.3406 19.6339 14.1823C19.6339 11.9956 18.3799 10.9022 15.8718 10.9022H12.3363V17.4197H15.8718Z" fill="white"/>
  <path d="M46.6338 10.8596V15.7584H56.8324V22.1055H46.6338V27.5155H58.1922V34.2034H37.7497V4.1717H58.1922V10.8596H46.6338Z" fill="white"/>
  <path d="M79.5977 34.5016C75.8809 34.5016 72.8288 33.678 70.4416 32.0309C68.0544 30.3554 66.7701 27.9699 66.5888 24.8744H76.0622C76.1528 25.9252 76.4852 26.6919 77.0594 27.1747C77.6335 27.6575 78.3739 27.8989 79.2804 27.8989C80.0963 27.8989 80.7611 27.7143 81.2748 27.3451C81.8187 26.9475 82.0907 26.408 82.0907 25.7264C82.0907 24.846 81.6525 24.1644 80.7762 23.6817C79.8999 23.1989 78.4796 22.6593 76.5154 22.0629C74.4304 21.4098 72.7382 20.785 71.4388 20.1886C70.1696 19.5638 69.0516 18.6693 68.0846 17.5049C67.1478 16.3122 66.6794 14.7645 66.6794 12.8617C66.6794 10.9306 67.1932 9.28349 68.2206 7.92034C69.248 6.5288 70.6682 5.47805 72.4813 4.76808C74.2944 4.05811 76.3492 3.70312 78.6458 3.70312C82.3626 3.70312 85.3239 4.52669 87.5299 6.17382C89.766 7.79255 90.9596 10.0787 91.1107 13.0321H81.4561C81.4259 12.1234 81.1237 11.4418 80.5496 10.9874C80.0056 10.533 79.2955 10.3058 78.4192 10.3058C77.7544 10.3058 77.2105 10.4904 76.7874 10.8596C76.3644 11.2288 76.1528 11.7542 76.1528 12.4357C76.1528 13.0037 76.3795 13.5007 76.8327 13.9267C77.3162 14.3243 77.9055 14.6793 78.6005 14.9916C79.2955 15.2756 80.3229 15.6448 81.6827 16.0992C83.7074 16.7524 85.3693 17.4055 86.6686 18.0587C87.9982 18.6835 89.1314 19.578 90.0682 20.7424C91.0352 21.8783 91.5187 23.3267 91.5187 25.0874C91.5187 26.8765 91.0352 28.4811 90.0682 29.901C89.1314 31.3209 87.7565 32.4427 85.9434 33.2663C84.1605 34.0898 82.0454 34.5016 79.5977 34.5016Z" fill="white"/>
  <path d="M169.884 34.2034H161L149.169 17.4197V34.2034H140.285V4.1717H149.169L161 21.1684V4.1717H169.884V34.2034Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3395 8.98185C28.2461 10.487 28.6993 12.2193 28.6993 14.1788C28.6993 15.9963 28.2461 17.6577 27.3395 19.1628C26.4632 20.6395 25.1185 21.8323 23.3054 22.7411C21.5225 23.6214 19.3317 24.0616 16.733 24.0616H12.3362V34.2H3.45211V4.16825H16.733C19.3015 4.16825 21.4772 4.59423 23.2601 5.4462C25.0732 6.29816 26.433 7.47671 27.3395 8.98185ZM15.2976 27.023V37.1614H0.490723V1.20686H16.733C19.6123 1.20686 22.2477 1.68229 24.5281 2.77C26.791 3.83507 28.6281 5.38144 29.8763 7.45394C31.0918 9.47199 31.6607 11.7446 31.6607 14.1788C31.6607 16.5122 31.0721 18.702 29.8812 20.6826C28.6665 22.7254 26.8561 24.2739 24.6324 25.3885L24.6245 25.3925L24.6166 25.3964C22.3206 26.5301 19.6522 27.023 16.733 27.023H15.2976ZM59.7938 13.8176V24.5507H61.1536V37.1614H34.7882V1.20686H61.1536V13.8176H59.7938ZM46.6338 15.755V10.8562H58.1922V4.16825H37.7496V34.2H58.1922V27.5121H46.6338V22.1021H56.8324V15.755H46.6338ZM68.75 34.4582L68.7403 34.4514C65.5608 32.2198 63.8627 28.9763 63.6324 25.0441L63.4488 21.9096H68.5405C67.5279 21.2123 66.6164 20.3689 65.8064 19.3935L65.7805 19.3624L65.7556 19.3306C64.3141 17.4953 63.718 15.2522 63.718 12.8583C63.718 10.3775 64.3883 8.08684 65.8468 6.14615C67.2453 4.25707 69.1407 2.89241 71.4015 2.00711C73.6144 1.14058 76.0447 0.738281 78.6458 0.738281C82.772 0.738281 86.4169 1.65076 89.2844 3.78463C92.2925 5.9701 93.8754 9.10932 94.0682 12.8774L94.2274 15.9901H89.079C90.3248 16.7417 91.4185 17.7001 92.3507 18.8519C93.8337 20.611 94.48 22.7673 94.48 25.084C94.48 27.4343 93.836 29.6183 92.5281 31.5465C91.2372 33.4949 89.3987 34.9443 87.1766 35.9552C84.923 36.9944 82.3679 37.4595 79.5977 37.4595C75.4487 37.4595 71.7642 36.5379 68.7598 34.465L68.75 34.4582ZM85.9434 33.2628C87.7565 32.4392 89.1314 31.3175 90.0682 29.8975C91.0351 28.4776 91.5186 26.8731 91.5186 25.084C91.5186 23.3232 91.0351 21.8749 90.0682 20.7389C89.1314 19.5746 87.9982 18.68 86.6686 18.0553C85.3692 17.4021 83.7073 16.7489 81.6827 16.0957C81.5757 16.06 81.4708 16.0248 81.3679 15.9901C80.1633 15.5838 79.2408 15.2498 78.6004 14.9882C78.5861 14.9817 78.5718 14.9753 78.5575 14.9688C77.8812 14.6611 77.3062 14.3126 76.8327 13.9232C76.3794 13.4973 76.1528 13.0003 76.1528 12.4323C76.1528 11.7507 76.3643 11.2254 76.7874 10.8562C77.2104 10.487 77.7543 10.3024 78.4191 10.3024C79.2955 10.3024 80.0056 10.5296 80.5495 10.984C81.0935 11.4145 81.3934 12.049 81.4491 12.8876C81.4521 12.934 81.4545 12.981 81.4561 13.0287H91.1107C91.0556 11.953 90.8623 10.9659 90.5308 10.0673C89.9519 8.49853 88.9516 7.19956 87.5298 6.17037C85.3239 4.52324 82.3626 3.69967 78.6458 3.69967C76.3492 3.69967 74.2944 4.05466 72.4813 4.76463C70.6682 5.4746 69.2479 6.52535 68.2205 7.91689C67.1931 9.28003 66.6794 10.9272 66.6794 12.8583C66.6794 14.761 67.1478 16.3087 68.0846 17.5015C69.0515 18.6658 70.1696 19.5604 71.4388 20.1852C72.6384 20.7358 74.1729 21.3106 76.0422 21.9096C76.0488 21.9117 76.0555 21.9138 76.0621 21.916C76.2111 21.9636 76.3622 22.0115 76.5154 22.0595C77.4093 22.3309 78.1906 22.5906 78.8592 22.8384C79.6597 23.1352 80.2986 23.4152 80.7762 23.6782C81.6525 24.161 82.0906 24.8426 82.0906 25.7229C82.0906 26.4045 81.8187 26.9441 81.2747 27.3417C80.761 27.7108 80.0962 27.8954 79.2804 27.8954C78.3738 27.8954 77.6335 27.654 77.0593 27.1713C76.5133 26.7121 76.1859 25.9961 76.0772 25.0232C76.0716 24.9731 76.0666 24.9224 76.0621 24.871H66.5888C66.6516 25.9433 66.8467 26.9304 67.1743 27.8324C67.7922 29.534 68.8813 30.9324 70.4416 32.0275C72.8288 33.6746 75.8808 34.4982 79.5977 34.4982C82.0453 34.4982 84.1605 34.0864 85.9434 33.2628ZM172.845 37.1614H159.464L152.131 26.7577V37.1614H137.324V1.20686H150.716L158.038 11.7265V1.20686H172.845V37.1614ZM161 21.1649L149.169 4.16825H140.285V34.2H149.169V17.4163L161 34.2H169.884V4.16825H161V21.1649ZM16.6635 14.3775C16.6687 14.3264 16.6725 14.2608 16.6725 14.1788C16.6725 14.0775 16.6669 13.9983 16.6597 13.9388C16.5147 13.9007 16.2632 13.8602 15.8718 13.8602H15.2976V14.4549H15.8718C16.2611 14.4549 16.5144 14.4156 16.6635 14.3775ZM12.3362 17.4163H15.8718C18.3799 17.4163 19.6339 16.3371 19.6339 14.1788C19.6339 11.9921 18.3799 10.8988 15.8718 10.8988H12.3362V17.4163Z" fill="black"/>
  <path d="M132.2 19.1005C132.2 28.0142 124.974 35.2401 116.06 35.2401C107.147 35.2401 99.9209 28.0142 99.9209 19.1005C99.9209 10.1869 107.147 2.96094 116.06 2.96094C124.974 2.96094 132.2 10.1869 132.2 19.1005Z" fill="#B19873"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M135.161 19.101C135.161 29.6502 126.61 38.202 116.06 38.202C105.511 38.202 96.9595 29.6502 96.9595 19.101C96.9595 8.5518 105.511 0 116.06 0C126.61 0 135.161 8.5518 135.161 19.101ZM116.06 35.2406C124.974 35.2406 132.2 28.0146 132.2 19.101C132.2 10.1873 124.974 2.96139 116.06 2.96139C107.147 2.96139 99.9209 10.1873 99.9209 19.101C99.9209 28.0146 107.147 35.2406 116.06 35.2406Z" fill="black"/>
  <path d="M124.945 19.1029C124.945 24.0095 120.967 27.9871 116.06 27.9871C111.154 27.9871 107.176 24.0095 107.176 19.1029C107.176 14.1963 111.154 10.2188 116.06 10.2188C120.967 10.2188 124.945 14.1963 124.945 19.1029Z" fill="#988364"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M116.06 25.0257C119.332 25.0257 121.983 22.374 121.983 19.1029C121.983 15.8319 119.332 13.1801 116.06 13.1801C112.789 13.1801 110.138 15.8319 110.138 19.1029C110.138 22.374 112.789 25.0257 116.06 25.0257ZM116.06 27.9871C120.967 27.9871 124.945 24.0095 124.945 19.1029C124.945 14.1963 120.967 10.2188 116.06 10.2188C111.154 10.2188 107.176 14.1963 107.176 19.1029C107.176 24.0095 111.154 27.9871 116.06 27.9871Z" fill="black"/>
  <path d="M42.1771 47.9766V78.0406H33.8189V61.4521L28.1472 78.0406H21.1536L15.4393 61.3241V78.0406H7.08105V47.9766H17.1877L24.7357 67.5075L32.1131 47.9766H42.1771Z" fill="white"/>
  <path d="M71.6057 73.1366H60.9446L59.3242 78.0406H50.5395L61.499 47.9766H71.1366L82.0534 78.0406H73.2261L71.6057 73.1366ZM69.5161 66.7399L66.2751 57.0171L63.0768 66.7399H69.5161Z" fill="white"/>
  <path d="M118.523 78.0406H110.165L99.0346 61.2389V78.0406H90.6764V47.9766H99.0346L110.165 64.9915V47.9766H118.523V78.0406Z" fill="white"/>
  <path d="M136.531 47.9766V78.0406H128.173V47.9766H136.531Z" fill="white"/>
  <path d="M165.663 73.1366H155.002L153.382 78.0406H144.597L155.556 47.9766H165.194L176.111 78.0406H167.283L165.663 73.1366ZM163.573 66.7399L160.332 57.0171L157.134 66.7399H163.573Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M45.1385 45.0117V80.9986H30.8574V79.2639L30.2644 80.9986H19.0362L18.4006 79.1392V80.9986H4.11963V45.0117H19.218L24.704 59.2071L30.0661 45.0117H45.1385ZM24.7357 67.5041L17.1877 47.9731H7.08102V78.0372H15.4393V61.3207L21.1536 78.0372H28.1472L33.8188 61.4486V78.0372H42.1771V47.9731H32.1131L24.7357 67.5041ZM73.2261 78.0372L71.6056 73.1331H60.9446L59.3241 78.0372H50.5395L61.499 47.9731H71.1365L82.0534 78.0372H73.2261ZM63.0849 76.0945L61.4645 80.9986H46.3079L59.4265 45.0117H73.2118L86.2793 80.9986H71.0858L69.4653 76.0945H63.0849ZM121.484 80.9986H108.574L101.996 71.0682V80.9986H87.715V45.0117H100.636L107.203 55.0512V45.0117H121.484V80.9986ZM110.165 64.9881L99.0346 47.9731H90.6763V78.0372H99.0346V61.2354L110.165 78.0372H118.523V47.9731H110.165V64.9881ZM139.493 45.0117V80.9986H125.212V45.0117H139.493ZM167.283 78.0372L165.663 73.1331H155.002L153.381 78.0372H144.597L155.556 47.9731H165.194L176.111 78.0372H167.283ZM157.142 76.0945L155.522 80.9986H140.365L153.484 45.0117H167.269L180.337 80.9986H165.143L163.523 76.0945H157.142ZM66.2751 57.0136L63.0768 66.7365H69.5161L66.2751 57.0136ZM160.332 57.0136L157.134 66.7365H163.573L160.332 57.0136ZM136.531 78.0372H128.173V47.9731H136.531V78.0372Z" fill="black"/>
  </svg>
  
    </div>
   <div class="peson">
  
      <H1 id="label" for=""> YA PERDISTE POR MAMON!!
          CREADO PRO EL DIOS HIBRAN ALV PASEN PACK POR PRIV SI NO PUES ES POR QUE YA LO TENGO BESOS EN LOS PESONES PARADOS ATT: CHINGA TU MADRE OSCAR,FERNANDO,STEVE Y ALAN , BESOS NACNY Y MELISSA
      </label>
  
      <button class="peson2">
    </button>
   </div>
  </div>`)
  }
export default out;