<template>
  <SectionFull class="bannerBox  min-h-screen py-12 md:py-20 px-4  flex flex-col items-center justify-center  bg-[#f6fbf9]">
    <div v-if="state.section=='commit'" class=" bg-white shadow-xl px-8 py-5 md:px-16 md:py-10 rounded-lg max-w-[600px] font-normal text-[#1d1d1d]">
        <p class=" text-3xl font-medium">Hi,{{ state.regform.name }}</p>
        <p class="mt-3 md:mt-6">Your registration has been successfully submitted. </p>
        <!-- A confirmation email will arrive within 10 minutes. -->
        <p class="mt-3 md:mt-6">We warmly invite you to contribute to our brief, one-minute survey. Your insights are invaluable to us and will directly influence the improvements we make to enhance your experience.</p>
        <ul class="mt-3 md:mt-6">
          <li class="liItem">Your feedback is crucial for shaping our service enhancements.</li>
          <li class="liItem">We assure you that your privacy will be safeguarded, with no request for financial or sensitive information.</li>
          <li class="liItem">Your participation will enable us to tailor our services to meet your needs more effectively.</li>
        </ul>
        <p class="mt-3 md:mt-6">We look forward to your valuable input and appreciate your support and trust.</p>
        <div @click="startAnswer" class="warranty-common-btn max-w-[300px] bg-[#01799c] rounded-full before:bg-[#048eb6]">
          <span class=" relative z-10">SURE. I'D LOVE TO HELP</span>
        </div>
    </div>

    <div v-if="state.section=='question'" class="flex flex-col">
      <nav aria-label="Progress" class="mx-auto">
        <ol role="list" class="flex items-center">
          <li v-for="(step, stepIdx) in state.steps" :key="step.name" :class="[stepIdx !== state.steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']">
            <template v-if="step.name <(state.oldStep||state.nowStep)">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="h-0.5 w-full bg-[#ddd]" />
              </div>
              <div @click="tabChange(step.name)" class="relative cursor-pointer text-white w-8 h-8 flex items-center justify-center bg-[#ddd] rounded-full hover:bg-[#01799c]">
                <span>{{ step.name }}</span>
              </div>
            </template>
            <template v-else-if="step.name ==(state.oldStep||state.nowStep)" >
              <div class="absolute inset-0 flex items-center bg-[]" aria-hidden="true">
                <div class="h-0.5 w-full bg-[#01799c]" />
              </div>
              <div @click="tabChange(step.name)" class="relative cursor-pointer w-8 h-8 text-white  flex items-center justify-center bg-[#01799c]  rounded-full" aria-current="step">
                <span >{{ step.name }}</span>
              </div>
            </template>
            <template v-else>
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="h-0.5 w-full bg-[#ccc]" />
              </div>
              <div @click="tabChange(step.name)" class="group cursor-pointer relative w-8 h-8 flex items-center justify-center text-[#01799c] bg-white border-2 border-[#01799c] rounded-full">
                <span>{{ step.name }}</span>
              </div>
            </template>
           
          </li>
        </ol>
      </nav>
      
      <RadioGroup   class="bg-white px-10 py-8 rounded-xl max-w-[600px] mt-10 shadow-xl">
        <RadioGroupLabel>
          <span class="text-3xl font-medium">{{state.steps[(state.oldStep||state.nowStep)-1].title}}</span>
        </RadioGroupLabel>
        <div class=" -space-y-px flex flex-wrap mt-4">
          <RadioGroupOption as="template" v-for="(setting, settingIdx) in state.steps[(state.oldStep||state.nowStep)-1].ans" :key="setting.name" :value="setting" >
            <div @click="changeStep((state.oldStep||state.nowStep),setting)"  :class="[state.steps[(state.oldStep||state.nowStep)-1].ans.length>2?'w-1/2':'w-full', settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '', state.answer['step'+state.nowStep] == setting ? 'z-10' : '', 'relative  p-4 flex cursor-pointer focus:outline-none']">
              <span :class="[state.answer['step'+(state.oldStep||state.nowStep)] == setting ? 'bg-[#01799c] border-transparent' : 'bg-white border-[#1d1d1d]', 'h-4 w-4 mt-0.5 cursor-pointer rounded-full border-2 flex items-center justify-center']" aria-hidden="true">
                <span class="rounded-full bg-white w-1.5 h-1.5" />
              </span>
              <div class="ml-3 flex flex-col">
                <RadioGroupLabel as="span" :class="[state.answer['step'+(state.oldStep||state.nowStep)] == setting ? 'text-[#01799c]' : 'text-gray-900', 'block text-sm font-medium']">
                  {{ setting }}
                </RadioGroupLabel>
                
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>

    <div class="bg-white shadow-xl px-8 py-5 md:px-16 md:py-10 rounded-lg max-w-[600px] w-full  md:w-[600px] font-normal text-[#1d1d1d]" v-if="state.section=='sorry'">
      <svg t="1718558985529" class="h-12 w-12" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14520" width="32" height="32"><path d="M257.976623 255.99776c11.801497 0 23.628593-11.827097 23.628593-23.654193C281.605216 220.56767 269.778119 204.798208 257.976623 204.798208 246.149526 204.798208 230.405664 216.599705 230.405664 228.426801c3.942366 15.743862 11.827097 27.570959 27.570959 27.570959z m56.293907-177.432047c7.782332 7.014339 11.673498 14.028677 11.673498 24.575785 0 10.495908-3.891166 17.510247-3.891166 28.031754 0 10.521508 0 17.535847 11.673498 21.043016 7.782332 3.507169 15.564664 0 23.346996-7.014339l23.346995-21.043015c7.782332-7.014339 15.564664-10.495908 23.346996-7.014339 11.673498 0 23.346996 3.507169 35.020494 3.507169 7.782332 0 15.564664-3.507169 19.455829-10.495908 3.891166-7.039938 3.891166-14.054277-3.891166-21.068616-7.782332-7.014339-15.564664-10.495908-23.372595-17.535846-7.756732-7.039938-15.539064-14.054277-11.647898-24.575785 0-7.014339 3.891166-17.535847 3.891166-24.524585 0-10.547108 0-17.561446-11.647898-21.068616-11.699098-3.507169-19.48143 0-23.372596 7.014339-7.782332 7.014339-11.673498 14.054277-19.45583 17.535846-7.782332 10.495908-15.564664 14.028677-31.129327 10.495908-11.673498-6.988739-23.346996-6.988739-31.129328-6.988739-11.673498 0-19.45583 3.507169-23.372595 10.521508-3.839966 7.014339 0 14.028677 7.807931 21.043016 7.782332 7.014339 15.564664 10.547108 23.372596 17.561447h-0.0256z m-57.445897 258.557737c8.319927 19.967825 16.639854 36.60768 24.985381 56.575505 8.319927 13.311884 20.787018 19.942226 33.279709 13.311884a23.807792 23.807792 0 0 0 16.639854-29.951738c-8.319927-19.967825-16.639854-36.60768-24.985381-56.575505-4.121564-9.932713-12.467091-13.286284-24.959782-13.286284-16.639854 3.327971-29.132545 16.639854-24.985381 29.951738h0.0256z m765.433302 285.181505a21.606211 21.606211 0 0 0-19.609428-11.622298h-31.359726c-11.750297 0-19.583829-3.839966-27.44296-11.596699-3.891166-7.756732-11.775897-15.513464-15.667063-23.244597-7.859131-7.731132-15.692663-15.487864-23.551793-11.622298-11.750297 3.891166-11.750297 11.622298-11.750298 23.244597v27.135762c0 11.596699-3.916766 19.353431-11.750297 27.084563-7.833531 3.891166-15.692663 11.622298-23.526194 15.487865-7.833531 7.756732-15.667063 15.487864-11.775897 27.135762 3.942366 11.596699 11.775897 11.596699 23.551794 11.596699h27.44296c11.750297 0 19.583829 3.891166 27.44296 11.647898 7.833531 7.731132 11.750297 15.487864 19.583828 27.135762 3.916766 7.705533 11.775897 7.705533 23.526195 7.705533 7.833531-3.865566 15.667063-7.731132 15.667062-19.353431V688.121979c0-11.596699 3.942366-15.487864 11.775897-23.218997 7.833531-7.756732 19.583829-11.596699 27.44296-19.353431 0-7.756732 3.916766-15.513464 0-23.244596zM358.430144 793.593056l10.572707-127.99888L460.803648 755.551789l-102.399104 38.015667V793.593056z m-42.29083 21.580611L256.00544 844.792608l20.044625-299.798977V537.595296L332.804768 600.519545l-16.665454 214.654122z m-146.942714 76.62013L102.406784 921.591936l76.799328-204.798208-9.983913 175.000069z m111.487024-445.256904c-7.475135-7.551934-22.451004-11.340701-33.663705-11.340701a58.23949 58.23949 0 0 0-29.926139 22.655802L3.898846 970.999504c-7.475135 15.103868-3.763167 30.207736 7.475135 41.522836 11.212702 11.315101 26.188571 15.103868 41.13884 7.551934l512.430716-215.089318c11.238302-3.763167 18.687836-15.103868 22.451003-30.182136 3.737567-11.315101 0-26.418969-11.212702-33.945303L280.683624 446.536893z m422.652302 249.265019c-6.783941-4.147164-16.895852-8.319927-23.628593-12.467091-13.491082-4.172763-23.628593-12.492691-37.094076-16.639855-13.516682-4.198363-23.628593 4.147164-27.007764 16.639855-3.353571 16.639854 0 29.132545 13.491082 33.279709l60.722669 24.959781c13.491082 4.172763 26.982164-8.319927 26.982164-20.787018 0-12.467091-3.37917-20.812618-13.491082-24.985381z m124.978106-130.661257c-126.053297-54.092327-211.326151-23.167797-304.02294 46.361194-14.84787 7.731132-14.84787 27.058963-7.423935 42.495629 7.423935 7.731132 14.84787 11.596699 22.271806 11.596698 7.423935 0 11.110303 0 14.79667-3.839966 81.586486-61.849059 144.613135-85.016856 248.445826-38.655662 14.82227 7.731132 33.356508 0 37.068476-15.436665 11.110303-19.327831 3.711968-38.655662-11.110303-42.521228h-0.0256zM795.546319 742.393504c-11.775897 0-27.545359 11.801497-27.545359 23.654193 0 11.775897 11.827097 23.602993 23.628593 27.545359 11.827097 0 27.570959-11.801497 27.570959-23.628593 0-15.769462-11.827097-27.570959-23.628593-27.570959z m78.642512-383.99664c-16.793453 0-29.388543 12.799888-29.388543 25.599776 0 17.075051 12.59509 25.599776 25.19018 25.599776 16.793453 0 29.388543-12.799888 25.190179-29.874939 4.198363-8.524725-8.396727-21.324613-20.991816-21.324613zM418.820015 182.091207c-15.769462 7.423935-23.679793 22.271805-15.769462 37.068475 43.39162 103.807092 23.679793 166.80814-39.474854 248.369027-7.884731 14.82227-7.884731 29.644541 7.910331 40.754844 3.942366 3.711968 11.827097 3.711968 15.769462 3.711967 7.884731 0 19.711828-3.711968 23.679792-11.110303 71.013779-92.671189 102.578302-177.918443 47.333986-303.94614-3.942366-14.84787-23.679793-22.271805-39.423655-14.84787zM735.489244 236.285932c7.475135 3.737567 18.662237 3.737567 26.137372 7.475135 11.212702 3.711968 14.924669 7.475135 18.662237 18.687837 3.737567 11.161502 3.737567 18.636637 7.475134 29.849338 3.737567 7.449535 7.449535 14.924669 18.662237 14.92467 7.475135 0 14.924669-7.475135 18.687836-14.92467 3.711968-11.212702 7.449535-18.687836 7.449535-29.874938 3.737567-11.187102 7.475135-14.950269 18.662237-18.687837 11.212702-3.711968 22.399804-7.449535 29.874938-11.161502 7.475135-3.763167 11.187102-11.212702 14.92467-18.687837 0-11.187102-7.449535-14.924669-14.92467-18.662236-7.475135 0-18.662237-3.737567-26.111771-7.449535-11.212702-3.737567-18.687836-7.500734-18.687837-18.687837-3.737567-7.475135-3.737567-18.687836-7.475134-26.137371-3.711968-11.187102-7.475135-14.924669-18.687837-14.924669-11.161502 0-14.924669 7.475135-18.636637 14.924669-3.737567 7.475135-3.737567 14.924669-7.475134 26.162971-7.475135 11.161502-14.924669 18.662237-26.111772 18.662237-7.475135 3.711968-14.950269 3.711968-22.425404 7.449535-11.187102 3.737567-18.662237 7.475135-18.662236 18.687836 0 14.89907 7.475135 18.636637 18.662236 22.374204z m53.426733 175.972861c-30.335735 9.830314-57.266699 22.937399-84.223263 36.018885-6.732741 3.276771-13.465482 9.855914-13.465482 19.686227 0 13.081486 13.465482 22.937399 26.956564 16.383857 30.310135-9.855914 57.266699-22.962999 87.551234-36.070084 13.491082-6.553543 16.870252-16.383857 10.111911-26.188571-3.353571-9.830314-13.465482-16.383857-26.930964-9.830314zM556.418811 332.797088c9.983913 0 16.691054-3.993565 20.019025-12.006295 13.363083-36.018885 26.700566-72.03777 36.710079-108.056654 3.327971-12.031895 0-24.03819-9.983913-32.02532-10.035112-4.019165-23.398195 0-26.726166 11.980695-13.337483 36.044485-26.700566 72.063369-36.710079 108.082254-6.681542 15.99986 3.327971 32.02532 16.691054 32.02532z m-93.387982 190.89753c-7.244737 17.945443 3.660768 35.916486 25.420577 39.500454 10.879905 0 18.124641-3.583969 21.75981-7.167937 29.030146-28.774148 58.034692-57.497097 83.455269-86.245646l137.854794-136.472405c7.270336-7.167937 10.879905-10.777506 10.879905-21.555012 0-14.387074-7.270336-25.16458-21.75981-28.748548-14.515073-3.583969-21.785409 0-29.030146 7.167937-105.215079 104.191088-116.094984 118.552563-221.310063 222.718051-3.609568 3.583969-7.244737 7.219137-7.244737 10.803106zM638.056497 153.598656C653.774759 153.598656 665.601856 141.822759 665.601856 126.027697c0-11.801497-11.827097-23.628593-23.654193-23.628593C626.229401 102.399104 614.402304 114.175001 614.402304 129.995663c0 11.775897 7.884731 23.602993 23.654193 23.602993z" fill="#00db8c" p-id="14521"></path></svg>
      <div class="text-[#00db8c] text-3xl font-medium mt-3 mb-8">THANK YOU!!!</div>
    </div>

    <div class="bg-white shadow-xl px-8 py-5 md:px-16 md:py-10 rounded-lg md:w-[600px] max-w-[600px] font-normal text-[#1d1d1d]" v-if="state.section=='needhelp'">
      <CheckCircleIcon class="h-14 w-14 text-[#00db8c]" />
      <div class="text-[#00db8c] text-3xl font-medium mt-3">Thanks! That's very kind of you</div>
      <div class="text-sm leading-6 mt-10 text-[#1d1d1d] font-bold">People always love to know:</div>
    <div class="text-sm leading-6 mt-4 text-[#1d1d1d] font-medium">Why did you buy it over another?</div>
    <div class="text-sm leading-6 mt-1 text-[#1d1d1d]">What are you expecting from the product?</div>
    <a href="https://www.amazon.com/review/create-review?"  target="_blank" class="text-sm leading-6 mt-1 text-[#01799c] underline">Click to light up stars on Amazon NOW</a>
    <div class="text-sm leading-6 mt-1 text-[#1d1d1d] flex items-center"><QuestionMarkCircleIcon class="h-4 w-4 inline-block text-[#01799c]" />No link?A tip to review on Amazon APP</div>
      <div class="sm:flex gap-3 mt-8">
        <div @click="backHome"  class="warranty-common-btn border border-[#ccc] rounded-full before:bg-gray-300">
          <span class=" relative z-10 text-sm text-[#1d1d1d]">JUST PASS</span>
        </div>
        <div @click="changeSection('doit')" class="warranty-common-btn bg-[#01799c] rounded-full before:bg-[#048eb6] mt-3 sm:mt-0">
          <span class=" relative z-10 text-sm">IT'S DONE</span>
        </div>
      </div>
    </div>

    <div class="bg-white shadow-xl px-8 py-5 md:px-16 md:py-10 rounded-lg md:w-[700px] max-w-[700px] font-normal text-[#1d1d1d]" v-if="state.section=='doit'">
      <CheckCircleIcon class="h-14 w-14 text-[#00db8c]" />
      <div class="text-[#00db8c] text-3xl font-medium mt-3">THANKS!</div>
      
      <div class="text-sm leading-6 mt-4 text-[#1d1d1d] font-medium">Check your inbox from <a href="mailto:support@homeast.vip" class="text-[#01799c] ">
                support@homeast.vip
            </a> for a confirmation email, arriving shortly.</div>
      <div class="text-sm leading-6 mt-3 text-[#1d1d1d] flex font-bold items-center">
        <a href="https://clean.email/blog/email-security/how-to-whitelist-an-email" target="_blank">How to Whitelist an Email</a>
        </div>
      <div class="text-sm leading-6 mt-3 text-[#1d1d1d] ">Click to follow us on social media and be the first to receive exclusive offer updates.</div>
      <div class="flex gap-3 mt-3">
        <a href="https://www.youtube.com/@HOMEAST" target="_blank">
          <svg  class="w-6 h-6 cursor-pointer" t="1721487187977" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6782" width="32" height="32"><path d="M512 1024a512 512 0 1 1 512-512 512.548571 512.548571 0 0 1-512 512z m0-987.428571a475.428571 475.428571 0 1 0 475.428571 475.428571 475.940571 475.940571 0 0 0-475.428571-475.428571z" fill="#01799c" p-id="6783"></path><path d="M732.525714 324.534857a71.021714 71.021714 0 0 1 49.700572 50.249143 723.236571 723.236571 0 0 1 11.593143 137.618286 762.770286 762.770286 0 0 1-11.593143 137.142857 71.021714 71.021714 0 0 1-49.700572 50.249143 1696 1696 0 0 1-220.525714 11.739428 1633.974857 1633.974857 0 0 1-220.525714-12.214857 71.021714 71.021714 0 0 1-49.700572-50.249143 816.347429 816.347429 0 0 1 0-274.285714A72.448 72.448 0 0 1 291.474286 324.059429 1696 1696 0 0 1 512 312.32a1628.928 1628.928 0 0 1 220.562286 12.214857z m-130.011428 187.428572l-146.797715-79.396572v158.573714z" fill="#01799c" p-id="6784"></path></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61565986221196" target="_blank">
            <svg t="1718527009956" class="w-6 h-6 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5352" width="32" height="32"><path d="M512 64.050782c60.495816 0 119.153774 11.836583 174.345794 35.181267 53.335742 22.558785 101.245915 54.864562 142.401244 96.01989s73.461105 89.066525 96.01989 142.401244c23.344684 55.19202 35.181267 113.851001 35.181267 174.345794 0 60.494793-11.836583 119.153774-35.181267 174.345793-22.558785 53.334719-54.864562 101.245915-96.01989 142.401244s-89.066525 73.461105-142.401244 96.019891c-55.19202 23.344684-113.851001 35.181267-174.345794 35.181267s-119.153774-11.836583-174.345794-35.181267c-53.335742-22.558785-101.245915-54.864562-142.401244-96.019891S121.791857 739.679489 99.233072 686.34477c-23.344684-55.19202-35.181267-113.851001-35.181267-174.345793 0-60.495816 11.836583-119.153774 35.181267-174.345794 22.558785-53.335742 54.864562-101.245915 96.01989-142.401244s89.066525-73.461105 142.401244-96.01989c55.19202-23.344684 113.849978-35.181267 174.345794-35.181267m0-51.16531c-275.653107 0-499.114528 223.461421-499.114528 499.114528S236.346893 1011.114528 512 1011.114528s499.114528-223.461421 499.114528-499.114528S787.653107 12.885472 512 12.885472z" fill="#fff" p-id="5353"></path><path d="M450.54023 373.666398v76.873832h-61.508889v92.188632h61.508889v215.156268h92.205005V542.729885h92.222401v-92.188632h-92.206028v-61.491493c0-18.450211 12.295024-30.729885 30.697139-30.729885h61.508889V266.113847h-76.906577c-58.356083-0.001023-107.520829 49.1627-107.520829 107.552551z" fill="#01799c" p-id="5354"></path></svg>
          </a>
        <a href="https://www.tiktok.com/@homeastus" target="_blank">
          <svg t="1719161880334" class="w-6 h-6 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1549" width="200" height="200"><path d="M715.710638 408.782979c-0.27234-5.991489 0-11.982979 0-17.974468-7.897872-0.27234-15.523404-0.817021-23.421276-2.451064-13.07234-2.723404-25.6-7.897872-36.765958-14.978724-0.817021-0.817021-1.361702-1.634043-2.451064-2.178723-15.251064-9.259574-27.506383-23.421277-35.676595-39.489362-5.174468-10.348936-9.531915-21.242553-11.710639-32.40851h-0.54468c-1.089362-6.808511-1.906383-13.617021-1.906383-20.425532h-80.612766c0 38.944681 0.27234 78.161702-0.272341 117.106383v204.255319c0 22.604255-12.52766 44.66383-31.591489 56.374468-19.880851 12.8-46.570213 13.889362-66.995745 2.451064-7.625532-4.629787-14.706383-10.076596-20.425532-16.885107-8.442553-9.804255-13.889362-22.059574-15.251064-34.859574-1.361702-13.07234 0.817021-26.689362 6.808511-38.67234 3.540426-7.080851 8.442553-13.07234 14.434043-18.246809 9.804255-8.170213 21.787234-13.617021 34.314893-16.340426 10.348936-2.451064 21.514894-2.451064 31.86383 1.089362v-40.306383c0-7.897872 0.27234-15.795745-0.27234-23.693617-0.27234-6.26383 0-12.52766 0-18.791489-33.497872-4.902128-68.629787 2.451064-97.497873 20.425532-19.880851 12.255319-36.765957 29.412766-49.021276 49.293617-13.344681 21.787234-20.970213 47.114894-21.514894 72.714893-0.817021 27.778723 6.26383 55.829787 20.425532 79.795745 10.621277 17.974468 24.782979 33.770213 41.940425 45.480851 0.27234 0.27234 0.817021 0.817021 1.089362 0.817021 16.068085 11.165957 34.314894 19.06383 53.378724 23.148937 13.617021 2.995745 27.506383 3.812766 41.395744 3.268085 27.234043-0.817021 54.468085-9.804255 76.52766-26.144681 17.157447-12.52766 31.046809-28.595745 41.668085-46.842553 12.255319-20.970213 19.880851-44.66383 21.514894-69.174468 0.544681-6.53617 0.27234-13.344681 0.27234-19.880852-0.27234-49.838298-0.544681-99.404255-0.544681-149.242553 32.13617 22.876596 71.353191 35.404255 110.842553 34.859575 0-20.153191 0.27234-41.123404 0-62.093617z m0 0" p-id="1550" fill="#01799c"></path><path d="M512 1024C229.582979 1024 0 794.417021 0 512S229.582979 0 512 0s512 229.582979 512 512-229.582979 512-512 512z m0-980.425532C253.821277 43.574468 43.574468 253.821277 43.574468 512s210.246809 468.425532 468.425532 468.425532 468.425532-210.246809 468.425532-468.425532S770.178723 43.574468 512 43.574468z" fill="#01799c" p-id="1551"></path></svg>
        </a>
      </div>
    </div>
  </SectionFull>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { commitQuestion } from "@/api";
import SectionFull from '@/components/SectionFull/index.vue';
import { TrophyIcon } from "@heroicons/vue/20/solid";
import { CheckCircleIcon,QuestionMarkCircleIcon } from "@heroicons/vue/24/outline";

import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
const router = useRouter()
const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link' },
  { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
  { name: 'Private to you', description: 'You are the only one able to access this project' },
]
const selected = ref(settings[0])
const state = reactive({
    regform:{},
    section:sessionStorage.section||"commit",//当前页面状态commit ｜ question | success
    steps : [
      { 
        name: 1, 
        title:"What's your gender?" ,
        ans:['Male','Female','Non-binary','Prefect not to Answer'],
      },
      { name: 2, 
        title:"What's your age?(Broad range)",
        ans:['Under 18','18~24','25~34','35~44','45~54','55~64','Above 64'],

    },
    { 
        name: 3, 
        title:"Does the product work well?" ,
        ans:['Yes, everything is great',"Need help OR doesn't work as expected"],
      },
      { 
        name: 4, 
        title:"Would you rate the overall satisfaction with 5 stars?" ,
        ans:["Sure! I'd love to.","Sorry. I'm afraid not."],
      }
    ],
    oldStep:'',
    nowStep:sessionStorage.nowStep?Number(sessionStorage.nowStep):1,
    answer:sessionStorage.answer?JSON.parse(sessionStorage.answer):{
      step1:'',
      step2:'',
      step3:'',
      step4:'',
    }
})
if(!sessionStorage.regForm){
    router.push('/warranty/registration')
}else{
    state.regform = JSON.parse(sessionStorage.regForm)
}
const backHome = () => {
  router.push('/warranty')
}
const startAnswer = () => {
  state.section='question';
  state.nowStep=1;
  sessionStorage.section="question";
  sessionStorage.nowStep=1;
}

const tabChange = (step) => {
  if(step<state.nowStep){
    state.oldStep=step;
  }else if(step==state.nowStep){
    state.oldStep = ''
  }
}
const changeStep = async (step,answer) => {
  
  if(answer){
    state.answer['step'+step] = answer
    sessionStorage.answer = JSON.stringify(state.answer);
   const res = await commitQuestion({
    orderId:state.regform.orderId,
    ['qa'+step]:answer
   })
    if(step<=3){
      step+=1
    }else if(answer.includes('Sure')){
      state.section='needhelp';
      sessionStorage.section = "needhelp"
    }else{
      state.section='sorry';
      sessionStorage.section = "sorry"
    }
  }
  if(state.oldStep && step!==state.nowStep){
    state.oldStep = step
  }else{
    state.oldStep=''
    state.nowStep=step;
    sessionStorage.nowStep=step;
  }
 
}

const changeSection = (type) => {
  state.section=type;
  sessionStorage.section = type;
}
</script>
<style lang="less" scoped>
.bannerBox{
}
.liItem{
  @apply pl-5 relative;
  &::before{
    content:'';
    @apply inline-block w-2 h-2 bg-[#01799c] rounded-full absolute left-1 top-2;
  }
}
.warranty-common-btn{
    @apply text-white  mt-3 md:mt-10 w-full h-10 md:h-12 relative overflow-hidden cursor-pointer flex justify-center items-center;
    &:before{
      @apply absolute w-0 h-full left-0 transition-all rounded-full;
      content: '';
    }
    &:hover:before{
      width:100%;
    }
  }
</style>