'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// ─── Cartoon Hamburger SVG ────────────────────────────────────────────────────
function BurgerIcon({ isOpen }) {
  // Smooth, playful cubic-bezier transition for a cartoon feel
  const baseTransition = {
    transition: "all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)"
  };

  return (
    <div className="relative w-10 h-10 flex items-center justify-center select-none">
      {/* Container to hold elements tightly when closed, and let them expand when open */}
      <div className={`relative w-9 h-9 transition-all duration-500 ${isOpen ? 'scale-110' : 'scale-100'}`}>

        {/* ── TOP BUN ── */}
        <svg
          className="absolute left-0 right-0 h-[14px]"
          viewBox="0 0 244 242"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            ...baseTransition,
            // When closed, it sits neatly near the top center. When open, it pops upward and tilts.
            transform: isOpen ? "translateY(-14px) rotate(-8deg)" : "translateY(0px) rotate(0deg)",
            top: "2px"
          }}
        >
          <path d="M0 0 C0.65433517 -0.00335861 1.30867035 -0.00671722 1.98283386 -0.01017761 C4.13449021 -0.01963544 6.28606833 -0.02162799 8.43774414 -0.02270508 C9.9408013 -0.02592082 11.44385816 -0.02928513 12.94691467 -0.03279114 C16.09319789 -0.03876916 19.23945369 -0.04063236 22.38574219 -0.04003906 C26.40835947 -0.03993742 30.43080034 -0.05359798 34.45337582 -0.07081127 C37.55640972 -0.08195272 40.65940122 -0.08395763 43.76245308 -0.08342934 C45.24514945 -0.08460589 46.72784704 -0.08900941 48.21052361 -0.0967617 C50.28760887 -0.10660688 52.3643143 -0.10366618 54.44140625 -0.09765625 C55.62101425 -0.09908127 56.80062225 -0.10050629 58.01597595 -0.10197449 C61.42111024 0.15552623 64.09534286 0.96254798 67.28540039 2.14526367 C69.05657227 2.55518555 69.05657227 2.55518555 70.86352539 2.97338867 C76.76926853 4.41477138 82.37562758 6.70438388 88.03540039 8.89526367 C89.13883789 9.31291992 90.24227539 9.73057617 91.37915039 10.16088867 C118.09073013 20.44421984 118.09073013 20.44421984 124.28540039 32.14526367 C124.94540039 32.47526367 125.60540039 32.80526367 126.28540039 33.14526367 C126.28540039 33.80526367 126.28540039 34.46526367 126.28540039 35.14526367 C126.8693457 35.36311523 127.45329102 35.5809668 128.05493164 35.80541992 C131.01100614 37.58113543 132.18017504 39.65451598 133.97290039 42.58276367 C134.57489258 43.55084961 135.17688477 44.51893555 135.79711914 45.51635742 C138.66946235 50.59007653 138.64406356 55.4040654 139.00415039 61.11401367 C139.17364535 64.18871457 139.17364535 64.18871457 140.28540039 67.14526367 C140.56668748 70.7445745 140.56290599 74.34867437 140.59790039 77.95776367 C140.6269043 78.94325195 140.6559082 79.92874023 140.68579102 80.9440918 C140.7389603 87.0340195 140.34927065 90.51572649 136.28540039 95.14526367 C134.65604798 96.52394648 132.98790432 97.8580046 131.28540039 99.14526367 C130.50165039 99.92901367 129.71790039 100.71276367 128.91040039 101.52026367 C120.16828874 110.26237532 111.77582719 114.1478055 100.06665039 117.89916992 C98.16029938 118.52739923 96.24982956 119.1607212 94.40893555 119.96069336 C88.75422741 122.39211762 83.75937799 122.46952004 77.66040039 122.27026367 C75.83498485 122.22655654 74.00945449 122.18737244 72.18383789 122.15307617 C71.3863916 122.12874512 70.58894531 122.10441406 69.76733398 122.0793457 C67.21727557 122.08671748 67.21727557 122.08671748 64.47241211 122.63647461 C60.76297444 123.22866613 57.13924392 123.28885432 53.39477539 123.27807617 C52.27779266 123.27951126 52.27779266 123.27951126 51.13824463 123.28097534 C49.56831782 123.28165294 47.99838815 123.2798281 46.4284668 123.27563477 C44.05649323 123.27031101 41.68471164 123.27557836 39.31274414 123.28198242 C37.77758748 123.28132098 36.24243094 123.28003844 34.70727539 123.27807617 C34.0121283 123.2801004 33.3169812 123.28212463 32.60076904 123.28421021 C28.81831386 123.2666921 25.11931342 123.05627325 21.35742188 122.65234375 C16.46749431 122.12770582 11.62622039 121.96146315 6.71118164 121.89916992 C4.90103467 121.86791544 3.09089488 121.83624351 1.28076172 121.80419922 C0.35115631 121.78884125 -0.5784491 121.77348328 -1.53622437 121.75765991 C-28.19711976 121.29348114 -28.19711976 121.29348114 -40.40209961 120.33276367 C-41.26472412 120.27483643 -42.12734863 120.21690918 -43.01611328 120.15722656 C-47.90772853 119.7104514 -51.54348141 118.51402856 -55.84521484 116.15087891 C-58.58679433 114.676076 -61.49268334 113.68111135 -64.40209961 112.58276367 C-73.82938799 108.54828972 -82.86509416 102.3907733 -88.02709961 93.27026367 C-91.96633731 82.7555292 -91.5625341 67.63599443 -86.98022461 57.42260742 C-84.78609293 53.47452481 -82.40074448 49.77591335 -79.71459961 46.14526367 C-79.22862305 45.4672168 -78.74264648 44.78916992 -78.24194336 44.09057617 C-64.06441748 24.65791403 -48.00759295 13.799329 -25.48803711 6.10864258 C-21.70946603 4.79612132 -17.96569483 3.39355392 -14.22241211 1.98388672 C-9.43570914 0.38319311 -5.03974665 0.01629648 0 0 Z" 
            fill="#F09F68" 
            transform="translate(97.714599609375,-0.145263671875)"
          />
          {/* Explicitly colored elements so they never display as white */}
          <path d="M0 0 C-12.71459961 6.14526367 -39.69649324 12.92460442 -63.88099508 25.32803121 -77.28100586 47.57885742 -83.79184774 59.23450623 -82.99194336 85.51635742 -81.19595647 90.87523328 -74.71459961 98.14526367 -72.58959961 100.58276367 -60.7789856 111.10961529 -45.69448649 113.47719828 -30.51147461 114.75073242 -26.71459961 115.14526367 -25.71459961 116.14526367 50.91040039 117.27026367 62.13696289 117.27807617 68.24848145 117.61149032 71.28540039 116.14526367 108.92602539 106.73120117 124.9305289 101.68161629 131.41040039 96.53198242 134.28540039 88.14526367 138.82720468 73.46880937 136.22103722 60.32756029 131.00024414 49.47338867 119.08132776 28.09237989 96.22947992 14.71394939 73.28540039 8.14526367 53.28540039 4.14526367 37.77368164 2.94213867 11.13476523 2.54205701 -12.71459961 6.14526367 Z" 
            fill="#E9E7E7" 
            transform="translate(97.714599609375,-0.145263671875)"
          />
        </svg>

        {/* ── LETTUCE ── */}
        <svg
          className="absolute left-0 right-0 h-[10px]"
          viewBox="0 0 244 242"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            ...baseTransition,
            transform: isOpen ? "translateY(-7px) rotate(4deg)" : "translateY(0px) rotate(0deg)",
            top: "11px"
          }}
        >
          <path d="M0 0 C3.55422291 1.8883592 6.73182326 3.70148681 9.37109375 6.79296875 C9.37109375 7.45296875 9.37109375 8.11296875 9.37109375 8.79296875 C10.70191851 9.46462914 12.0359791 10.12987669 13.37109375 10.79296875 C22.75664369 15.1959266 28.59869762 16.38989343 36.14453125 16.5546875 C57.90625 19.05859375 69.45043945 19.05371094 81.20117188 19.06640625 C92.62467204 19.07367005 115.3828125 17.93359375 132.328125 12.96875 C138.37120986 9.49079867 151.76171875 9.84765625 160.06640625 8.35546875 C173.1015625 6.55078125 178.9375 3.7109375 184.23046875 1.5859375 C192.37109375 2.79296875 193.37109375 3.79296875 193.05859375 8.04296875 C191.81578079 15.78682991 185.87109375 23.10546875 179.37109375 27.79296875 C165.43359375 27.79296875 139.32421875 31.30859375 136.37109375 36.79296875 C134.37109375 41.79296875 128.37109375 41.91796875 109.37109375 39.79296875 C101.42474632 38.82346203 94.49609375 42.04296875 92.37109375 44.79296875 C86.33995303 49.70203678 71.80859375 50.85546875 60.31640625 44.38671875 C52.87109375 41.29296875 47.37109375 39.79296875 34.93359375 41.35546875 C21.37109375 43.6504374 21.37109375 41.79296875 10.37109375 32.79296875 C3.89299259 28.47423465 -13.69140625 29.23046875 -24.62890625 28.79296875 C-38.62890625 25.79296875 -42.62890625 25.79296875 -43.94140625 19.48046875 C-43.86726987 11.72395028 -37.06640625 -1.89453125 0 0 Z" fill="#78AE5A" transform="translate(48.62890625,113.20703125)"/>
          <path d="M0 0 C-37.31640625 7.10546875 -38.94140625 12.35546875 -31.2421875 17.61328125 C-17.47251434 26.89242314 -3.42114258 25.88574219 14.12109375 31.73046875 C19.37109375 38.79296875 31.37109375 39.79296875 37.37109375 36.79296875 C52.93359375 35.796875 59.37109375 40.79296875 74.58203125 48.66796875 C88.03648333 43.47515539 94.24609375 38.48046875 104.87109375 35.60546875 C113.37109375 37.79296875 128.37109375 39.79296875 137.55859375 31.66796875 C143.37109375 25.79296875 149.12109375 26.01171875 165.43359375 27.79296875 C174.3984375 21.38671875 176.05859375 21.38671875 188.37109375 13.79296875 C192.37109375 13.79296875 188.09568671 9.97483428 186.37109375 6.79296875 C174.3984375 9.72265625 154.5 13.359375 144.37109375 15.79296875 C128.94614672 20.26664836 115.18896484 21.77148438 104.19140625 23.41015625 C76.24609375 23.91796875 18.20582946 23.78701038 3.37109375 11.79296875 C-5.76953125 6.01171875 -18.78274109 0.99606912 -37.31640625 7.10546875 Z" fill="#F4F1EF" transform="translate(48.62890625,113.20703125)"/>
        </svg>

        {/* ── CHEESE ── */}
        <svg
          className="absolute left-0 right-0 h-[8px]"
          viewBox="0 0 244 242"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            ...baseTransition,
            transform: isOpen ? "translateY(-1px) rotate(-3deg)" : "translateY(0px) rotate(0deg)",
            top: "17px"
          }}
        >
          <path d="M0 0 C0.125 6.625 0.125 6.625 -1 10 C0.98 10.495 0.98 10.495 3 11 C1 14 1 14 -2.71484375 14.87890625 C-11.10285703 16.70686546 -16.81419221 18.91829526 -22.5625 20.9375 C-31.47038812 24.09769758 -36.50812142 25.85528972 -41.49609375 27.69921875 C-51.5 30.875 -57.0219542 32.53669918 -66 38 C-75.6875 40.8125 -84.0668549 42.41094624 -97 52 C-108.97060378 57.98530189 -128.36027597 50.83661857 -140 47 C-156.5859375 39.72265625 -163.44249709 36.42095909 -177.73144531 32.16235352 C-192.59765625 27 -200.2591249 23.81083582 -216.0625 19.5 C-219.89275179 18.65454198 -221.99122611 18.00579408 -225.3125 15.8125 C-227.44675288 9.54198766 -227 5 -226 3 C-212.53474293 3.56824701 -184 9 -184 11 C-172.375 11.875 -152.06787109 14.67138672 -138 17 C-126.24955439 19.08560215 -102.06756592 18.01959229 -85.43829346 17.84539795 C-66.33183049 16.40602997 -59.5324707 13.18725586 -42.22851562 9.76733398 C-15.9311895 1.42821414 -8.62954877 -0.57530325 0 0 Z" fill="#FBCA4E" transform="translate(238,125)"/>
          <path d="M0 0 C2.4765625 0.02734375 4.375 0.0625 4.5 6.6875 C7.375 11.0625 5.375 14.0625 1.66015625 14.94140625 C-6.72785703 16.76936546 -12.43919221 18.98079526 -18.1875 21 C-27.09538812 24.09769758 -32.13312142 25.85528972 -37.12109375 27.76171875 C-47.125 30.9375 -52.6469542 32.59919918 -61.625 38.0625 C-71.3125 40.875 -79.6918549 42.47344624 -92.625 52.0625 C-104.59560378 58.04780189 -123.98527597 50.89911857 -135.625 47.0625 C-163.44562972 35.07740807 -170.97265625 33.0546875 -175.625 29.0625 C-168.625 30.0625 -146.625 37.0625 -119.625 47.0625 C-103.375 49.375 -91.625 46.0625 -91.625 46.0625 C-84.69044075 39.2117853 -74.75 36.8125 -59.25 31.75 C-39.78515625 24.15234375 -10.61132812 13.921875 0.375 11.0625 C0.375 8.7525 0.375 4.0625 -6.625 4.0625 C-8.40249945 6.66705021 -12.625 5.0625 -12.625 4.0625 C-6.625 4.0625 -6.625 1.0625 -4.21954362 -0.14022819 Z" fill="#3B3426" transform="translate(233.625,124.9375)"/>
        </svg>

        {/* ── PATTY ── */}
        <svg
          className="absolute left-0 right-0 h-[10px]"
          viewBox="0 0 244 242"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            ...baseTransition,
            transform: isOpen ? "translateY(5px) rotate(3deg)" : "translateY(0px) rotate(0deg)",
            top: "21px"
          }}
        >
          <path d="M0 0 C0.721875 0.226875 1.44375 0.45375 2.1875 0.6875 C2.95632217 8.71742046 1.18220684 13.78755183 -2.8125 20.6875 C-7.8125 27.6875 -9.8125 29.6875 -15.875 33.5625 C-21.046875 36.6496582 -24.53125 38.74682617 -37.6875 44.25 C-48.0625 48.3125 -80.83203125 53.8203125 -90.625 53.8125 C-105.61509273 53.74196798 -128.11508179 53.47796631 -132.29971313 53.41705322 C-157.84509452 50.93820288 -169.828125 44.96484375 -181.5 41.3125 C-192.84610252 37.04598149 -197.8125 31.6875 -201.5625 28.5625 C-210.83763594 17.15120313 -212.8125 8.6875 -208.1875 6.1875 C-202.99383048 4.55141045 -196.8125 4.6875 -187 6.86328125 C-174.4006452 8.48199298 -152.97387695 11.96875 -138.0703125 14.00390625 C-118.3435515 14.58341087 -99.4375 14.875 -72.8125 10.6875 C-43.81689928 6.38511194 -29.17773438 6.2043457 -4.9375 0.9375 C-2.8125 -0.3125 0 0 0 0 Z" fill="#692415" transform="translate(228.8125,140.3125)"/>
          <path d="M-42 5 C-50.09678684 10.11082151 -66.125 10.1875 -79 10 C-79 9.34 -77.95042114 8.94054199 -76.87963867 8.87988281 C-67.1875 8.25 -51.62610101 6.48580155 -45.47973633 3.94702148 C-32 1 -9.85191543 -0.08917623 0 0 C0 1 -1.79244141 1.05607422 -3.62109375 1.11328125 C-14.37233483 1.45500912 -25.1640625 4.3671875 -42 5 Z" fill="#3B332D" transform="translate(202,147)"/>
        </svg>

        {/* ── TOMATO ── */}
        <svg
          className="absolute left-0 right-0 h-[8px]"
          viewBox="0 0 244 242"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            ...baseTransition,
            transform: isOpen ? "translateY(11px) -rotate(4deg)" : "translateY(0px) rotate(0deg)",
            top: "26px"
          }}
        >
          <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C4.63824388 4.54952841 4.20215522 8.37979543 3 12 C-1.05379296 19.82245675 -6.18220432 24.16774722 -14 28 C-21.98850942 31.3459783 -37.6171875 35.08984375 -45 36 C-56.5625 36.9375 -92.15832494 39.10569325 -115.62185669 39.20855713 C-145.00952148 37.43041992 -163.81542858 36.08699449 -172.22045898 34.20141602 C-185.6545099 31.08181364 -207.71875 15.52734375 -208 3 C-201.30942553 0.76980851 -187 7 -183 10 C-178 11 -162.34960938 12.4296875 -150.50390625 14.5234375 C-136.125 16.25 -124 15 -99.0625 15.5 C-61.6576416 16.26939168 -39.046875 13.5625 -12.5625 5.75 C-7.69946239 4 -1.62280307 2.12498069 0 0 Z" fill="#DE223B" transform="translate(227,98)"/>
          <path d="M-205 4 C-205.30435507 8.41314854 -203.5625 15.125 -197.53515625 5.20703125 C-51.11068616 37.51900623 -8 20 -8 18 C-1 13 -1 7 -1 7 C-7.23587874 6.44926855 -12.8125 8.875 -15 11 C-24.125 14.0625 -31 16 -37.875 16.5 C-56.02148438 18.20532227 -65.09375 18.31640625 -93.23020935 18.66062355 C-117.68577576 18.93619728 -150 17 -162.3203125 15.54882812 C-176.1875 14.09765625 -185.84448017 13.05944928 -197.53515625 5.20703125 Z" fill="#260B09" transform="translate(227,98)"/>
        </svg>

        {/* ── BOTTOM BUN ── */}
        <svg
          className="absolute left-0 right-0 h-[14px]"
          viewBox="0 0 244 242"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            ...baseTransition,
            transform: isOpen ? "translateY(18px) rotate(8deg)" : "translateY(0px) rotate(0deg)",
            top: "29px"
          }}
        >
          <path d="M0 0 C1.95703125 1.09765625 4 3 4.6875 9.4375 C5.51953125 17.91015625 5.47038155 30.9516795 3.3125 37.5625 C0.82532164 45.50113905 -1.47388231 49.46148963 -5 54 C-9.10338502 60.80553912 -16 65 -27.875 70.4375 C-39.06499839 72.37434454 -48.0625 74.4375 -94.55078125 81.82421875 C-111 82 -152.97731833 79.06988283 -174 78 C-186.1953125 71.265625 -193.1953125 68.375 -214 56 C-219.81085857 46.82226638 -225 32 -224 29 C-221 6 -215 7 -212 14 C-204 18 -204 20 -197.375 24.4375 C-178.26864698 32.15829918 -148 41 -124.37023926 41.95385742 C-99.23660278 42.84539795 -69.16862519 41.4143966 -34.9375 29.6875 C-9.20273991 12.70854559 0 0 0 0 Z" fill="#EF9F69" transform="translate(233,150)"/>
          <path d="M-6 19 C-10.06099289 26.9235198 -25.1953125 32.58984375 -31.4375 36.125 C-44.23046875 40.875 -72.375 48.75 -121.08161163 49.48493958 C-139.35546875 49.59375 -155.84879577 48.30531989 -162.4987793 45.16824341 C-171.8125 42.375 -187.91876747 38.21158791 -209 52 C-218.02610947 40.58866389 -219.50925455 30.14595979 -219 16 C-219 16 -216 16 -213.671875 18.45703125 C-195.80163467 17.58809937 -169 26 -162.71092224 33.16947937 C-155.29534265 31.59366307 -148.85808418 31.00623097 -139.35546875 37.55859375 C-120.20703125 37.5625 -103.48950195 27.18530273 -68.125 27.375 C-31.4375 27.375 -4 5 -2.2038449 15 C-3.68647421 16.91782679 -6 19 -6 19 Z" fill="#F0EEEB" transform="translate(233,150)"/>
        </svg>

      </div>
    </div>
  )
}
// ─── Community Icon ───────────────────────────────────────────────────────────
function CommunityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className="w-6 h-6">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      <circle cx="19" cy="8" r="3" fill="none"/>
      <path d="M22 20c0-2.5-1.5-4.5-3-5.5"/>
    </svg>
  )
}

// ─── Settings Icon ────────────────────────────────────────────────────────────
function SettingsIcon({ isOpen }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42
               M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  )
}

// ─── Hamburger menu items ─────────────────────────────────────────────────────
const BURGER_ITEMS = [
  { key: 'ads',       label: 'Ads',           emoji: '📣', href: '/ads' },
  { key: 'tags',      label: 'Tags',          emoji: '🏷️', href: '/tags' },
  { key: 'nothing',   label: 'Nothing Burger', emoji: '🫙', href: '/nothing' },
  { key: 'dashboard', label: 'Dashboard',     emoji: '📊', href: '/dashboard' },
  { key: 'favauthor', label: 'Fav Author',    emoji: '✍️', href: '/fav-author' },
]

// ─── Settings menu items ──────────────────────────────────────────────────────
const SETTINGS_ITEMS = [
  { label: 'Profile',          emoji: '👤', href: '/profile' },
  { label: 'Subscription',     emoji: '💳', href: '/subscription' },
  { label: 'Dashboard Edit',   emoji: '🎨', href: '/dashboard/edit' },
  { label: 'Connect w\' Us',   emoji: '🤝', href: '/connect' },
  { label: 'Suggestion Board', emoji: '💡', href: '/suggestions' },
]

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar = () => {
  const [burgerOpen, setBurgerOpen]     = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [subPanelOpen, setSubPanelOpen] = useState(false)
  const [pinnedItem, setPinnedItem]     = useState(null)   // key of pinned item
  const [darkMode, setDarkMode]         = useState(true)

  const burgerRef   = useRef(null)
  const settingsRef = useRef(null)

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (burgerRef.current && !burgerRef.current.contains(e.target)) {
        setBurgerOpen(false)
        setSubPanelOpen(false)
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handlePinItem = (key) => {
    setPinnedItem(key)
    setBurgerOpen(false)
    setSubPanelOpen(false)
  }

  const visibleBurgerItems = BURGER_ITEMS.filter(i => i.key !== pinnedItem)
  const pinnedBurgerItem   = BURGER_ITEMS.find(i => i.key === pinnedItem)

  return (
    <>
      {/* ── Desktop / Tablet Navbar ── */}
      <nav className="hidden md:flex relative items-center justify-between
                      px-6 py-3 border-b border-gray-800 bg-black z-50">

        {/* Site name = home */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight
                                   hover:text-purple-400 transition-colors">
          MissComic
        </Link>

        <div className="flex items-center gap-4">

          {/* ── Placeholder slot ── */}
          <div className="relative group">
            {pinnedBurgerItem ? (
              <button
                onClick={() => setPinnedItem(null)}
                title={`${pinnedBurgerItem.label} (click to unpin)`}
                className="w-9 h-9 flex items-center justify-center rounded-xl
                           bg-gray-900 hover:bg-gray-800 transition text-xl">
                {pinnedBurgerItem.emoji}
              </button>
            ) : (
              <div className="w-9 h-9 flex items-center justify-center rounded-xl
                              border-2 border-dashed border-gray-700 text-gray-600
                              text-xs font-bold select-none cursor-default">
                +
              </div>
            )}
          </div>

          {/* ── Community ── */}
          <Link href="/community"
            className="text-gray-500 hover:text-white transition-colors p-2
                       rounded-xl hover:bg-gray-900">
            <CommunityIcon />
          </Link>

          {/* ── Hamburger ── */}
          <div className="relative" ref={burgerRef}>
            <button
              onClick={() => {
                setBurgerOpen(o => !o)
                setSettingsOpen(false)
              }}
              className="w-11 h-11 flex items-center justify-center
                         rounded-xl hover:bg-gray-900 transition"
              aria-label="Toggle menu">
              <BurgerIcon isOpen={burgerOpen} />
            </button>

            {burgerOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-950
                              border border-gray-800 rounded-2xl p-2
                              shadow-2xl z-50 animate-in fade-in slide-in-from-top-2
                              duration-200 flex flex-col gap-0.5">

                {visibleBurgerItems.map(item => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setBurgerOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                               text-gray-300 hover:bg-gray-800 hover:text-white
                               text-sm transition">
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-800 my-1" />

                {/* Add to main */}
                <button
                  onClick={() => setSubPanelOpen(o => !o)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                             text-gray-300 hover:bg-gray-800 hover:text-purple-400
                             text-sm transition w-full text-left">
                  <span>📌</span>
                  <span className="flex-1">Add to main</span>
                  <span className="text-[9px] bg-purple-900/50 text-purple-400
                                  rounded px-1.5 py-0.5 font-bold tracking-wide">
                    SLOT
                  </span>
                </button>

                {/* Sub panel */}
                {subPanelOpen && (
                  <div className="bg-gray-900 rounded-xl p-1.5 flex flex-col gap-0.5">
                    <p className="text-[10px] text-gray-600 font-bold
                                  uppercase tracking-widest px-2 py-1">
                      Pin to navbar
                    </p>
                    {BURGER_ITEMS.map(item => (
                      <button
                        key={item.key}
                        onClick={() => handlePinItem(item.key)}
                        className={`flex items-center gap-2 px-2 py-2 rounded-lg
                                    text-xs transition w-full text-left
                                    ${pinnedItem === item.key
                                      ? 'bg-purple-900/40 text-purple-300'
                                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                        <span>{item.emoji}</span>
                        <span>{item.label}</span>
                        {pinnedItem === item.key && (
                          <span className="ml-auto text-purple-500">✓</span>
                        )}
                      </button>
                    ))}
                    {pinnedItem && (
                      <button
                        onClick={() => { setPinnedItem(null); setSubPanelOpen(false) }}
                        className="flex items-center gap-2 px-2 py-2 rounded-lg
                                    text-xs text-red-500 hover:bg-red-950 transition">
                        <span>✕</span> Remove pin
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Settings ── */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => {
                setSettingsOpen(o => !o)
                setBurgerOpen(false)
                setSubPanelOpen(false)
              }}
              className="text-gray-500 hover:text-white transition p-2
                         rounded-xl hover:bg-gray-900"
              aria-label="Settings">
              <SettingsIcon isOpen={settingsOpen} />
            </button>

            {settingsOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-950
                              border border-gray-800 rounded-2xl p-2 shadow-2xl
                              z-50 flex flex-col gap-0.5">

                {SETTINGS_ITEMS.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setSettingsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                               text-gray-300 hover:bg-gray-800 hover:text-white
                               text-sm transition">
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Theme toggle */}
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                text-gray-300 text-sm border-t border-gray-800 mt-1">
                  <span>🌗</span>
                  <span className="flex-1">UI Experience</span>
                  <div className="flex bg-gray-800 rounded-lg p-0.5 gap-0.5">
                    <button
                      onClick={() => setDarkMode(false)}
                      className={`text-[11px] px-2 py-1 rounded-md font-semibold transition
                                  ${!darkMode ? 'bg-gray-600 text-white' : 'text-gray-500'}`}>
                      Light
                    </button>
                    <button
                      onClick={() => setDarkMode(true)}
                      className={`text-[11px] px-2 py-1 rounded-md font-semibold transition
                                  ${darkMode ? 'bg-gray-600 text-white' : 'text-gray-500'}`}>
                      Dark
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-800 my-1" />

                <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                   text-gray-300 hover:bg-gray-800 hover:text-white
                                   text-sm transition w-full text-left">
                  <span>🚪</span> Log Out
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                   text-gray-400 hover:bg-red-950 hover:text-red-400
                                   text-sm transition w-full text-left">
                  <span>🗑️</span> Delete My Data
                </button>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* ── Mobile Bottom Navbar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50
                      bg-black border-t border-gray-800
                      flex items-center justify-around px-2 h-[68px]
                      safe-area-pb">
        <MobileTab href="/"             label="Home"         icon="home" />
        <MobileTab href="/community"    label="Community"    icon="community" />
        <MobileTab href="/settings"     label="Settings"     icon="settings" />
        <MobileTab href="/subscription" label="Subscription" icon="subscription" />
      </nav>

      {/* Spacer so content isn't hidden behind mobile nav */}
      <div className="md:hidden h-[68px]" />
    </>
  )
}

// ─── Mobile Tab ──────────────────────────────────────────────────────────────
function MobileTab({ href, label, icon }) {
  const icons = {
    home: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6">
        <path d="M3 12L12 3l9 9"/>
        <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"/>
      </svg>
    ),
    community: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42
                 M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    subscription: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6">
        <rect x="3" y="6" width="18" height="13" rx="2"/>
        <path d="M3 10h18M7 15h2M11 15h2"/>
      </svg>
    ),
  }

  return (
    <Link href={href}
      className="flex flex-col items-center gap-1 px-4 py-2 rounded-2xl
                 text-gray-500 hover:text-purple-400 hover:bg-gray-900
                 transition-all active:scale-95">
      {icons[icon]}
      <span className="text-[10px] font-semibold">{label}</span>
    </Link>
  )
}

export default Navbar
