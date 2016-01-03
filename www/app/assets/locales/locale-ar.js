module.exports = {

languages: {

        en: 'English (EN)',
        de: 'German (DE)',
        es: 'Spanish (ES)',
        fr: 'French (FR)',
        sk: 'Slovak (SK)',
        fi: 'Finish (Fi)',
        bg: 'Bulgarian (BG)',
        ja: 'Japanese (JA)',
        zh: 'Chinese (ZH; simplified, mandarin)',
        hi: 'Hindi (Hi)',
        tr: 'Turkish (TR)',
        hr: 'Croatian (HR)',
        el: 'Greek (EL)',
        it: 'Italian (IT)',
        pl: 'Polish (PL)',
        bs: 'Bosnian (BS)',
        ro: 'Romanian (RO)',
        sr: 'Serbian (SR)',
        ar: 'Arabic (AR)',
        sq: 'Albanian (SQ)',
        hu: 'Hungarian (HU)',
        ru: 'Russian (RU)'
 },

  wallet: {

	switch_language: 'Switch Language: ',

	home: {
		balances: 'أرصدة',
		contacts: 'جهات الاتصال',
		finder: 'FINDER',
		exchange: 'EXCHANGE',
		receive: 'تسلم',
		send: 'أرسل',
		transactions: 'المعاملات',
		date: 'تاريخ',
		all: 'كل',
		sent: 'أرسلت',
		recd: 'استلامها _',
		to: 'إلى',
		from: 'من',
		amount: 'كمية',
		asset: 'الأصول',
		name: 'اسم',
		account: 'حساب',
		memo: 'مذكرة',
		donateToDevs: 'تبرع 2 BTS للمطورين دعم في BitShares Munich',
		requestSpecificAmount: 'طلب مبلغ معين (اختياري)',
		sharePaymentRequest: 'مشاركة هذا الدفع طلب',
		inviteFriend: 'أدع صديقا',
		continue: 'تواصل',
		buy: 'يشترى',
		sell: 'يبيع',
		cancel: 'إلغاء',
		back: 'إلى الوراء',
		none: 'لا شيء',
		please_wait: 'يرجى الانتظار',
		thank_you: 'شكرا',
		balance: 'الرصيد',
		publicKey: 'المفتاح العام',
		privateKey: 'مفتاح خاص',
		yes: 'نعم',
		no: 'لا'
	},
	settings:{
		bitsharesWalletSettings: 'إعدادات محفظة BitShares',
		taxableCountry: 'ضريبة البلد',
		preferredLanguage: 'اللغة المفضلة',
		displayDtAs: 'تواريخ العرض وتايمز بأنه',
		getPricesFrom: 'الحصول على أسعار من',
		additionalSettings: 'إعدادات إضافية',
		checkUpdatesStartup: 'تحقق من وجود تحديثات على بدء التشغيل', 
		autoInstallMajorVer: 'تثبيت الإصدارات الإصدار الرئيسي تلقائيا',
		requirePinToSend: 'تتطلب PIN لإرسال الأموال',
		autoCloseWalletAfterInactivity: 'BitShares تلقائيا إغلاق المحفظة بعد 3 دقائق من الخمول',
		alwaysDonateDevsMunich: 'التبرع دائما 2 BTS للمطورين الدعم في BitShares ميونيخ (BitShares ميونيخ)',
		allowUse_GpsToFind: 'تسمح الباحث (V2.0) لاستخدام GPS للعثور على أقرب جهاز صراف آلي، البشر وأنظمة نقاط البيع مع Smartcoins',
		allowReportPosition : 'تسمح الباحث (V2.0) أن يقدم تقريرا وضعك بحيث يمكن للآخرين أن يشتري أو يبيع Smartcoins معك',
		pinNumber: 'عدد PIN',
		createEditPin: 'إنشاء أو تحرير الخاص بك PIN 6 أرقام لتأمين الصناديق والحسابات الخاصة بك',
		editPin: 'عدل PIN 6 أرقام لتأمين الصناديق والحسابات الخاصة بك',
		secureWithPin: 'تأمين بلدي كامل BitShares محفظة مع هذه PIN',
		pinFraudNote: 'ملاحظة: إذا تم إدخال PIN خاطئ 3 مرات، ثم سوف BitShares محفظة يغلق ولا يمكن أن تكون مقفلة لمدة 15 دقيقة.',
		backup: 'دعم',
		createEditSeed: 'إنشاء أو تحرير البذور سيدك (محفظة الدماغ 12 كلمة)',
		editSeed: 'تعديل البذور سيدك (محفظة الدماغ 12 كلمة)',
		coldStorageSpending: 'الإنفاق التخزين البارد',
		importPrivateKey: 'استيراد المفتاح الخاص وأمواله من رمز QR رقة أو الحافظة.',
		qa: 'Q & A',
		q_sharePublicAddress: 'س: كيف يمكنني تشاركونني BTS مخاطبة الجمهور مع شخص ما؟',
		a_sharePublicAddress: 'A: من الشاشة الرئيسية، انقر على رمز الاستجابة السريعة، أو اضغط باستمرار على BTS ... العنوان.',
		q_accessPrivateKeys: 'س: كيف يمكنني الوصول إلى المفاتيح الخاصة بي؟',
		a_accessPrivateKeys: 'A: من الشاشة الرئيسية، اضغط مع الاستمرار على identicon حساب المستخدم الذي يظهر على يسار اسم حساب المستخدم.',
		q_switchAccount : 'س: كيف يمكنني أن أتحول إلى حساب مختلف على الشاشة الرئيسية؟',
		a_switchAccount : 'A: انقر على السهم الأسود الصغير الذي يظهر على يمين اسم حساب المستخدم.',
		q_searchTransaction: 'س: كيف يمكنني البحث عن معاملة معينة؟',
		a_searchTransaction: 'A: اضغط على رأس العمود للترتيب النتائج بحسب هذا العمود (تصاعدي أو تنازلي). سيتم إضافة حقل البحث قريبا.',
		about: 'حول',
		bitsharesMunichDonationRequest: 'BitShares ميونيخ يجلب التكنولوجيا والخدمات Smartcoin للمستثمرين والشركات في جميع أنحاء العالم. يرجى النظر في التبرع لهذا المشروع BitShares محفظة لذلك يمكن للمطورين تحمل للحفاظ على هذه المحفظة آمنة، وعلة حرة وتحسين باستمرار. شكرا!',
		privacy: 'خصوصية',
		tcTitle: 'الشروط والأحكام',
		tcFullText: '',
		cancelAndExit: 'إلغاء وإنهاء',
		iAgree: 'أنا موافق',
		confirmSendAmount: 'هل أنت متأكد أنك تريد إرسال ن ن XX',
		confirmSendAmountRecipient: 'لYY؟',
		continue: 'تواصل',
		cancel: 'إلغاء'
	},
	dialog: {
	enterPin: 'أدخل PIN',
	incorrectPin: 'PIN غير صحيح',
	protectPinMessage: 'يرجى حماية رمز PIN',
	fraudAttemptMessage: 'الغش محاولة ! ( في 3 أرقام التعريف الشخصية غير صحيحة متتالية )'
}


  }
};