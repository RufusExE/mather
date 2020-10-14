/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Sequence/Sum']=


detail('等差或等比数列求和公式',Table([ZLR('前n项求和 记法 结果')],[
	[['等差数列','a+(a+d)+(a+2d)','+⋯+(a+(n−1)d)'].join(kbr),
		Eq([sum('i',1,'n','(a+(i-1)d)','',''), 'na+d'+sum('i',1,'n-1','i','','')]),
		Eq([frac('(a + a_n)n',2,''),'na + '+frac('n(n-1)',2,'')+'d'])+kbr+kxf('Gauss')+': 数列逆序，分别相加'
	],
	[zlr('','1 2 3 ⋯ n','+'),sum('i',1,'n','i','',''),frac(1,2,'')+'n(n+1)'],

	['等比数列 q≠1'+kbr+ZLR3('a',ZLR(' q q ⋯ q'),ZLR('  ^2  ^{n-1}'),'+'),
		Eq([sum('i',1,'n','aq^{i-1}','',''), 'a'+sum('i',0,'n-1','q^i','','')]),
		Eq([frac('a - a_nq','1-q',''),frac('a(1-q^n)','1-q','')])+kbr+'数列×q，错位相减'
	],
	['q≠1'+kbr+'1+q+q^2+⋯+q^{n-1}',
		Eq([sum('i',1,'n','q^{i-1}','',''), sum('i',0,'n-1','q^i','','')]),
		Eq([frac('1 - a_{n+1}','1-q',''),frac('1-q^n','1-q','')])+kbr+'数列×q，错位相减'
	],

	[zlr('','2 4 6 ⋯ 2n','+'),
	sum('i',1,'n','2i','','')+'\\\\=2'+sum('i',1,'n','i','',''),
	'n(n+1)'
	],

	[zlr('','1 3 5 \\\\⋯ (2n-1)','+'),
		[sum('i',1,'n','(2i-1)','',''),
		sum('i',1,'2n','i','','')+'-'+sum('i',1,'n','2i','','')+'(方法1)',
		2+sum('i',1,'n','i','','')+'-'+sum('i',1,'n','1','','')+'(方法2)',
		].join(kbr+'='),
		['n^2','方法1: 2n项之和减去n项和','方法2: 拆开通项多项式（下同）'].join(kbr)
	],

],'wiki').replace(/\n/g,br),1)+

detail('等幂和公式',Table([ZLR('前n项求和 记法 结果')],[

	[zlr('','1 2 3 ⋯ n','+'),sum('i',1,'n','i','',''),frac(1,2,'')+'n(n+1)'],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^2','+'),
		sum('i',1,'n','i^2','',''),
		Eq([frac(1,6,'')+'n(n+1)(2n+1)',
		frac(1,3,'')+'n(n+1)'+zp('n+'+frac(1,2,''))])
	],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^3','+'),
		sum('i',1,'n','i^3','',''),
		frac(1,4,'')+'n^2(n+1)^2'
	],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^4','+'),
		sum('i',1,'n','i^4','',''),
		[frac(1,30,'')+'n(n+1)(2n+1)','(3n^2+3n-1)',
		'='+frac(1,5,'')+'n(n+1)'+zp('n+'+frac(1,2,'')),zp('n^2+n-'+frac(1,3,''))].join(kbr)
	],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^5','+'),
		sum('i',1,'n','i^5','',''),
		Eq([frac(1,12,'')+'n^2(n+1)^2(2n^2+2n-1)',
		frac(1,6,'')+'n^2(n+1)^2'+zp('n^2+n-'+frac(1,2,''))])
	],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^6','+'),
		sum('i',1,'n','i^6','',''),
		[frac(1,42,'')+'n(n+1)(2n+1)','(3n^4+6n^3-3n+1)',
		'='+frac(1,7,'')+'n(n+1)'+zp('n+'+frac(1,2,'')), zp('n^4+2n^3-n+'+frac(1,3,''))].join(kbr)
	],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^7','+'),
		sum('i',1,'n','i^7','',''),
		[frac(1,24,'')+'n^2(n+1)^2','(3n^4+6n^3-n^2-4n+2)',
		'='+frac(1,8,'')+'n^2(n+1)^2', zp('n^4+2n^3-'+frac(1,3,'')+'n^2-'+frac(4,3,'')+'n+'+frac(2,3,''))].join(kbr)
	],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^8','+'),
		sum('i',1,'n','i^8','',''),
		[frac(1,90,'')+'n(n+1)(2n+1)','(5n^6+15n^5+5n^4-15n^3-n^2+9n-3)',
		'='+frac(1,9,'')+'n(n+1)'+zp('n+'+frac(1,2,'')), zp('n^6+3n^5+n^4-3n^3-'+frac(1,5,'')+'n^2+'+frac(9,5,'')+'n-'+frac(3,5,''))].join(kbr)
	],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^9','+'),
		sum('i',1,'n','i^9','',''),
		[frac(1,20,'')+'n^2(n+1)^2(n^2+n-1)','(2n^4+4n^3-n^2-3n+3)',
		'='+frac(1,10,'')+'n^2(n+1)^2(n^2+n-1)', zp('n^4+2n^3-'+frac(1,2,'')+'n^2-'+frac(3,2,'')+'n+'+frac(3,2,''))].join(kbr)
	],
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^{10}','+'),
		sum('i',1,'n','i^{10}','',''),
		[frac(1,66,'')+'n(n+1)(2n+1)(n^2+n-1)','(3n^6+9n^5+2n^4-11n^3+3n^2+10n-5)',
		'='+frac(1,11,'')+'n(n+1)'+zp('n+'+frac(1,2,''))+'(n^2+n-1)', zp('n^6+3n^5+'+frac(2,3,'')+'n^4-'+frac(11,3,'')+'n^3+n^2+'+frac(10,3,'')+'n-'+frac(5,3,''))].join(kbr)
	],
	
	[ZLR3('',ZLR('1 2 3 ⋯ n'),'^m','+'),
		sum('i',1,'n','i^m','',''),
		Eq([piece([
				[frac(1,'2','')+'n(n+1)','奇数m=1'],
				[frac(1,'m+1','')+'n^2(n+1)^2⋯','奇数m>3'],
				[frac(1,'m+1','')+'n(n+1)(2n+1)⋯','偶数m']
			]),
			'1\\/{m+1}'+sum('j',0,'m',binom('m+1','j')+'B_jn^{m+1-j}','',''),
			'1\\/{m+1}'+sum('j',0,'m',binom('m+1','j')+'B^jn^{m+1-j}','',''),
			frac('(B+n)^{m+1}-B^{m+1}','m+1',''),
		])+kbr+kxf(' 阴影形式 Umbral form')+'将B下标替换为上标'
	],


],'wiki').replace(/\n/g,br),1)+

detail('奇偶项等幂和公式',Table([ZLR('前n项求和 记法 结果')],[

	[zlr('','2 4 6 ⋯ 2n','+'),
	sum('i',1,'n','2i','','')+'\\\\=2'+sum('i',1,'n','i','',''),
	'n(n+1)'
	],

	[zlr('','1 3 5 \\\\⋯ (2n-1)','+'),
		[sum('i',1,'n','(2i-1)','',''),
		sum('i',1,'2n','i','','')+'-'+sum('i',1,'n','2i','','')+'(方法1)',
		2+sum('i',1,'n','i','','')+'-'+sum('i',1,'n','1','','')+'(方法2)',
		].join(kbr+'='),
		['n^2','=n(2n+1)-n(n+1)','=n(n+1)-n','方法1: 2n项之和减去n项和','方法2: 拆开通项多项式（下同）'].join(kbr)
	],

	[ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^2','+').replace('⋯',kbr+'⋯'),
		Eq([sum('i',1,'n','(2i-1)^2','',''),
			sum('i',1,'2n','i^2','','')+'-'+sum('i',1,'n','(2i)^2','','')
		]),
		
		frac(1,3,'')+'n(2n-1)(2n+1)'+kbr+'='+frac(1,3,'')+'n(4n^2-1)'
	],
	[ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^3','+').replace('⋯',kbr+'⋯'),
		Eq([sum('i',1,'n','(2i-1)^3','',''),
			sum('i',1,'2n','i^3','','')+'-'+sum('i',1,'n','(2i)^3','','')
		]),
		
			frac(1,4,'')+'(2n)^2(2n+1)^2-'+frac(1,4,'')+'2^3n^2(n+1)^2'+kbr+
			'=n^2(2n^2-1)'
		
	],
	[ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^4','+').replace('⋯',kbr+'⋯'),
		Eq([sum('i',1,'n','(2i-1)^4','',''),
			sum('i',1,'2n','i^4','','')+'-2^4'+sum('i',1,'n','i^4','','')
		]),
		frac(1,30,'')+'2n(2n+1)(4n+1)(12n^2+6n-1)'+kbr+
		'-'+frac('2^4',30,'')+'n(n+1)(2n+1)(3n^2+3n-1)'+kbr+

		
		'='+frac(1,15,'')+'n(2n+1)(24n^3-12n^2-14n+7)'
	],
	[ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^5','+').replace('⋯',kbr+'⋯'),
		Eq([sum('i',1,'n','(2i-1)^5','',''),
			sum('i',1,'2n','i^5','','')+'-2^5'+sum('i',1,'n','i^5','','')
		
		]),//bigintsim('2^2n^2((4n^2+4n+1)(8n^2+4n-1)-(n^2+2n+1)(16n^2+16n-8))','',{'n':2})/12n/7n
		frac(1,3,'')+'n^2(2n^2-1)()'
	],
	['奇数项等幂和'+kbr+ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^m','+').replace('⋯',kbr+'⋯'),
		Eq([sum('i',1,'n','(2i-1)^m','',''),
			sum('i',1,'2n','i^m','','')+'-2^m'+sum('i',1,'n','i^m','',''),
			'f_m(2n)-2^mf_m(n)',
		]),
		piece([
			[frac(1,'2','')+'n(n+1)','奇数m=1'],
			[frac(1,'m+1','')+'n^2(n+1)^2⋯','奇数m>3'],
			[frac(1,'m+1','')+'n(n+1)(2n+1)⋯','偶数m']
		])
	],




],'wiki').replace(/\n/g,br),1)+

detail('交错等幂和公式',Table([ZLR('前n项求和 记法 结果')],[

	[['1-2+3-⋯','+(-1)^{n-1}n'].join(kbr),
		sum('i',1,'n','(-1)^{i-1}⋅i','',''),
		Eq([piece([[frac(1,2,'')+'(n+1)','n为奇数'],['-'+frac('n',2,''),'n为偶数']]),
			frac('1+(-1)^{n-1}(2n+1)',4,''),
		])+
		
		kbr+Eq(['利用F(n)='+piece(['f(n) & n为奇数','g(n) & n为偶数']),
			frac('f+g',2,'')+'-(\\cos nπ)'+frac('f-g',2,''),
			frac('f+g',2,'')+'-(-1)^n'+frac('f-g',2,''),
			frac('f+g',2,'')+'+(-1)^{n-1}'+frac('f-g',2,''),
		])
	],


	[['1^2-2^2+3^2-⋯','+(-1)^{n-1}n^2'].join(kbr),
		sum('i',1,'n','(-1)^{i-1}⋅i^2','',''),
		
		'(-1)^{n-1}'+frac(1,2,'')+'n(n+1)'
	],

	[['1^3-2^3+3^3-⋯','+(-1)^{n-1}n^3'].join(kbr),
		sum('i',1,'n','(-1)^{i-1}⋅i^3','',''),
		
		frac('-1+(-1)^{n-1}(4n^3+6n^2-1)',8,''),
	],

	[['1^4-2^4+3^4-⋯','+(-1)^{n-1}n^4'].join(kbr),
		sum('i',1,'n','(-1)^{i-1}⋅i^4','',''),
		
		'(-1)^{n-1}'+frac(1,2,'')+'n(n+1)(n^2+n-1)',
		
	],

	[['1^m-2^m+3^m-⋯','+(-1)^{n-1}n^m'].join(kbr),
		sum('i',1,'n','(-1)^{i-1}⋅i^m','',''),
		[
		'(-1)^{n-1}'+frac(1,2,'')+'n(n+1)(????)+',
			'\\left(0(偶)或(-1)^{(m-1)/2}'+frac(1,'2^{m-1}','')+'(奇)\\right)',
		].join(kbr)
	],

],'wiki').replace(/\n/g,br),1)+


detail('连续数乘积和公式',Table([ZLR('前n项求和 记法 结果')],[

	['1⋅2+2⋅3+3⋅4\\\\+⋯+n(n+1)',
		sum('i',1,'n','i(i+1)','',''),
		frac(1,3,'')+'n(n+1)(n+2)'
	],
	['1⋅2⋅3+2⋅3⋅4+3⋅4⋅5\\\\+⋯+n(n+1)(n+2)',
		sum('i',1,'n','i(i+1)(i+2)','',''),
		frac(1,4,'')+'n(n+1)(n+2)(n+3)'
	],
	['1⋅2⋅3⋅4+2⋅3⋅4⋅5\\\\+⋯+n(n+1)(n+2)(n+3)',
		sum('i',1,'n','i(i+1)(i+2)(i+3)','',''),
		frac(1,5,'')+'n(n+1)(n+2)(n+3)(n+4)'
	],
	[['1⋅2⋅3⋯k+','2⋅3⋅4⋯(k+1)+','⋯+','n(n+1)(n+2)⋯(n+k-1)'].join(kbr),
		[sum('i',1,'n','i(i+1)⋯(i+k-1)','',''),'='+sum('i',1,'n',prod('j',1,'k','(i+j-1)','',''),'','')].join(kbr),
		
		[frac(1,'k+1','')+'n(n+1)(n+2)','(n+3)⋯(n+k)',
			'='+frac(1,'k+1','')+prod('i',1,'k+1','(n+i-1)','',''),
			'='+frac(1,'k+1','')+frac('(n+k)!','(n-1)!',''),
			'='+frac(1,'k+1','')+'A^{k+1}_{n+k}',
		].join(kbr)
	],


],'wiki').replace(/\n/g,br),1)+

detail('等差⋅等比 内积求和',Table([ZLR('前n项求和 记法 结果')],[


	[['连续数⋅等比','q+2⋅q^2+3⋅q^3+⋯+n⋅q^n'].join(kbr),
		sum('i',1,'n','i⋅q^i','','')+kbr+
		'(1-q)'+sum('i',1,'n','i⋅q^i','','')+'='+zp(sum('i',1,'n','q^i','',''))+'-n⋅q^{n+1}',
		[
		Eq([frac(zp(sum('i',1,'n','q^i','',''))+'-n⋅q^{n+1}','1-q',''),
		frac('q','1-q','')+'⋅'+zp(frac('1-q^n','1-q','')+'-nq^n'),
		]),
		'数列×q，错位相减'
		].join(kbr)
	],

	[['','1+2⋅q+3⋅q^2+⋯+n⋅q^{n-1}'].join(kbr),
		sum('i',1,'n','i⋅q^{i-1}','','')+kbr+
		'(1-q)'+sum('i',1,'n','i⋅q^{i-1}','','')+'='+zp(sum('i',1,'n','q^{i-1}','',''))+'-n⋅q^{n}',
		[
		Eq([frac(zp(sum('i',1,'n','q^{i-1}','',''))+'-n⋅q^{n}','1-q',''),
		frac('1','1-q','')+'⋅'+zp(frac('1-q^n','1-q','')+'-nq^n'),
		]),
		'数列×q，错位相减',
		].join(kbr)
	],
	[['','1+2⋅2+3⋅2^2+⋯+n⋅2^{n-1}'].join(kbr),
		sum('i',1,'n','i⋅2^{i-1}','','')+kbr+
		'(1-2)'+sum('i',1,'n','i⋅2^{i-1}','','')+'='+zp(sum('i',1,'n','2^{i-1}','',''))+'-n⋅2^{n}',
		[
		Eq(['n⋅2^{n}-'+sum('i',1,'n','2^{i-1}','',''),
		'(n-1)2^n+1',
		]),
		'数列×q，错位相减',
		].join(kbr)
	],


	[['等差⋅等比', 'aq+(a+d)⋅q^2+(a+2d)⋅q^3','+⋯+(a+(n-1)d)⋅q^n'].join(kbr),
		sum('i',1,'n','a_i⋅q^i','','')+kbr+'='+sum('i',1,'n','(a+(i-1)d)⋅q^i','','')+kbr+
		'(1-q)'+sum('i',1,'n','i⋅q^i','','')+kbr+'=aq-a_n⋅q^{n+1}+d'+sum('i',2,'n','q^i','',''),
		[
		Eq([frac('q'+zp('d'+zp(sum('i',1,'n-1','q^i','',''))+'+a_1-a_n⋅q^{n}','[]'),'1-q',''),
		frac('q','1-q','')+'⋅'+zp('d'+zp(frac('q(1-q^{n-1})','1-q',''))+'+a_1-a_n⋅q^{n}','[]'),
		]),
		'数列×q，错位相减'
		].join(kbr)
	],

	[['', 'a+(a+d)⋅q+(a+2d)⋅q^2','+⋯+(a+(n-1)d)⋅q^{n-1}'].join(kbr),
		sum('i',1,'n','a_i⋅q^{i-1}','','')+kbr+'='+sum('i',1,'n','(a+(i-1)d)⋅q^{i-1}','','')+kbr+
		'(1-q)'+sum('i',1,'n','i⋅q^{i-1}','','')+kbr+'=a-a_n⋅q^{n}+d'+sum('i',1,'n-1','q^i','',''),
		[
		Eq([frac('d'+zp(sum('i',1,'n-1','q^i','',''))+'+a_1-a_n⋅q^{n}','1-q',''),
		frac('1','1-q','')+'⋅'+zp('d'+zp(frac('q(1-q^{n-1})','1-q',''))+'+a_1-a_n⋅q^{n}','[]'),
		]),
		'数列×q，错位相减'
		].join(kbr)
	],

	[['', 'a+(a+d)⋅2+(a+2d)⋅2^2','+⋯+(a+(n-1)d)⋅2^{n-1}'].join(kbr),
		sum('i',1,'n','a_i⋅2^{i-1}','','')+kbr+'='+sum('i',1,'n','(a+(i-1)d)⋅2^{i-1}','','')+kbr+
		'(1-2)'+sum('i',1,'n','i⋅2^{i-1}','','')+kbr+'=a-a_n⋅2^{n}+d'+sum('i',1,'n-1','2^i','',''),
		[
		Eq([frac('d'+zp(sum('i',1,'n-1','2^i','',''))+'+a_1-a_n⋅2^{n}','1-q',''),
			'2d+a_{n-1}⋅2^{n}-a',
		]),
		'数列×q，错位相减'
		].join(kbr)
	],

],'wiki').replace(/\n/g,br),1)+

detail('等差⋅等差 内积求和',Table([ZLR('前n项求和 记法 结果')],[


	['1⋅1+2⋅3+3⋅5\\\\+⋯+n(2n-1)',
		sum('i',1,'n','i(2i-1)','',''),
		frac(1,6,'')+'n(n+1)(4n-1)'
	],



],'wiki').replace(/\n/g,br),1)+

detail('数列内积和（卷积和）公式',Table([ZLR('前n项求和 记法 结果')],[



	['1⋅2^2+2⋅3^2+3⋅4^2\\\\+⋯+n(n+1)^2',
		sum('i',1,'n','i(i+1)^2','',''),
		Eq([frac(1,12,'')+'n(n+1)(n+2)(3n+5)', frac(1,4,'')+'n(n+1)(n+2)'+zp('n+5\\/3')])
	],

	['1⋅2^2⋅3+2⋅3^2⋅4+3⋅4^2⋅5\\\\+⋯+n(n+1)^2(n+2)',
		sum('i',1,'n','i(i+1)^2(i+2)','',''),
		frac(1,10,'')+'n(n+1)(n+2)(n+3)(2n+3)'
	],


	[['1(n^2-1^2)+','2(n^2-2^2)+','3(n^2-3^2)+','⋯+','(n-1)(n^2-(n-1)^2)'].join(kbr),
		sum('i',1,'n-1','i(n^2-i^2)','',''),
		frac(1,4,'')+'n^2(n^2-1)'
	],


	[['2⋅1⋅2+4⋅2⋅3+8⋅3⋅4','⋯+2^n⋅n(n+1)'].join(kbr),
		sum('i',1,'n','2^i⋅i(i+1)','',''),
		'2^{n+1}(n^2-n+2)-4'
	],




]


	
,'wiki').replace(/\n/g,br),1)+

detail(i18('Reference'),ol([

	enwiki("Catalan's_conjecture"),
	enwiki('Diophantine_equation','2020-8-4'),
	enwiki('Faulhaber%27s_formula','2019-11-21'),
	enwiki('Umbral_calculus','2019-11-22'),
	enwiki("Sums_of_powers",'2020-8-11'),
	
	inhref('wiki.html?q=Formula/Equation/Diophantus'),
	inhref('explore.html?q=Problem/Problem List'),
	'《数学手册》，高等教育出版社，1979.5 第1版',
	'《实用数学手册》，科学出版社，2006.1 第2版',
	'《数学指南——实用数学手册》，科学出版社，2012.1 第1版',
]))



