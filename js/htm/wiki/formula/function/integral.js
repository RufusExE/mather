/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Integral']=Kx(
    detail(gM('Integral Formula'),Table([gM(ZLR('Name Content Condition Application'))],[
        
        [brA(['Newton-Leibniz','牛-莱公式']),hrA([`
            intl('f\\'(x)','a','b','x',0,'')+'=f(b)-f(a)'
        `,`
            'F(b)-F(a)='+intl('F\\'(x)','a','b','x',0,'')
        `],1),'',''
        ],
        [brA(['Green','格林公式']),hrA([`
            iint(zp(difn('F','x',1)+'+'+difn('G','y',1)),'D','','x,y',2,1)+'='+oint(['F','-G'],'L','','y;x',1,1)+kbr+
            ' （正向：逆时针方向）'+kbr+
            '其中的负号-，可借助外微分形式（反交换）来记忆'+kbr+'这样与\\text{Gauss}公式形式上统一'
        `,`
            oint(['P','+Q'],'L','','x;y',1,1)+'='+iint(zp(difn('Q','x',1)+'-'+difn('P','y',1)),'D','','x,y',2,1)+
            '='+iint('\\\\small '+kdet([[difn('','x',1),difn('','y',1)],ZLR('P Q')]),'D','','x,y',2,1)
        `],1),'',
            $js(`Eq(['求区域面积~ S',
                iint('','D','','x,y',2,1),
                iint('x','∂D','','y',1,1),
                '-'+iint('y','∂D','','x',1,1),
                '1\\\\/2'+iint(['x','-y'],'∂D','','y;x',1,1)])`),
        ],

        [brA(['Gauss','高斯公式']),hrA([`
            iint(zp(difn('P','x',1)+'+'+difn('Q','y',1)+'+'+difn('R','z',1)),'Ω','','x,y,z',3,1)+'='+oint(['P','+Q','+R'],'∂Ω','','y,z;z,x;x,y',2,1)
            `,`
            oint(['P','+Q','+R'],'∂Ω','','y,z;z,x;x,y',2,1)+'='+iint(zp(difn('P','x',1)+'+'+difn('Q','y',1)+'+'+difn('R','z',1)),'Ω','','x,y,z',3,1)
            `,`
            
            [
                Eq([['通量：'+oint(['\\\\b a ⋅'],'∂Ω','','\\\\b S',2,1), iint(['\\\\b ∇ ⋅\\\\b a'],'Ω','','V',3,1)],
                    iint(['\\\\text{div~}\\\\b a'],'Ω','','V',3,1)
                ]),

                ].join(kbr)
    

        `],1),'',
        
            $js(`Eq(['求区域体积~ V',
                iint('','Ω','','x,y,z',3,1),
                oint('x','∂Ω','','y,z',2,1),
                oint('y','∂Ω','','z,x',2,1),
                oint('z','∂Ω','','x,y',2,1),
                '1\\\\/3'+oint(['x','+y','+z'],'∂Ω','','y,z;z,x;x,y',2,1)])
            `)
        ],
      
        [brA(['Stokes','斯托克斯公式']),hrA([`
            Eq([oint(['P','+Q','+R'],'∂Σ','','x;y;z',1,1),
                iint(pp(difn('R','y',1)+'-'+difn('Q','z',1)),'Σ','','y,z',2,1)+'+'+iint(pp(difn('P','z',1)+'-'+difn('R','x',1)),'Σ','','z,x',2,1)+'+'+iint(pp(difn('Q','x',1)+'-'+difn('P','y',1)),'Σ','','x,y',2,1),
                '（将格林公式应用到三维空间曲线，3个方向补齐为3个封闭曲线，再各用一次格林公式）',
                iint(zp(pp(difn('R','y',1)+'-'+difn('Q','z',1))+'\\\\cos α+'+pp(difn('P','z',1)+'-'+difn('R','x',1))+'\\\\cos β+'+pp(difn('Q','x',1)+'-'+difn('P','y',1))+'\\\\cos γ','[]'),'Σ','','S',2,1),
                '\\\\iint\\\\limits_{Σ}\\\\small '+kdet([['\\\\d y\\\\d z','\\\\d z\\\\d x','\\\\d x\\\\d y'],[difn('','x',1),difn('','y',1),difn('','z',1)],ZLR('P Q R')])
                +'='+iint('\\\\small '+kdet([['\\\\cos α','\\\\cos β','\\\\cos γ'],[difn('','x',1),difn('','y',1),difn('','z',1)],ZLR('P Q R')]),'Σ','','S',2,1),
                
            ])
            `,`
            [
                Eq([['环量：'+oint(['\\\\b a ⋅'],'∂Σ','','\\\\b s',1,1), iint(['(\\\\b ∇ ×\\\\b a) ⋅'],'Σ','','\\\\b S',2,1)],
                    iint(['(\\\\r {rot~}\\\\b a) ⋅'],'Σ','','\\\\b S',2,1),
                    iint(['(\\\\r {curl~}\\\\b a) ⋅'],'Σ','','\\\\b S',2,1)
                ]),
            ].join(kbr)
            `,`

            [
                iint('ω','∂M','',' ',1,1)+'='+iint('','M','','ω',1,1),
                '上述牛-莱、格林、高斯、斯托克斯公式，',
                '也统称为斯托克斯公式'
            ].join(kbr)

        `],1),'',

        ],

        ['场论',hrA([`
            ['向量场：\\\\b a=P\\\\b i+Q\\\\b j+R\\\\b k',

            ].join(kbr)
            `,`

            [
            '\\\\text{Hamilton算子,~ Nabla：}\\\\b ∇ =\\\\b i'+difn('','x',1)+'+\\\\b j'+difn('','y',1)+'+\\\\b k'+difn('','z',1),
            '\\\\text{Laplace算子：} Δ =\\\\b ∇⋅\\\\b ∇='+difn('','x',1,2)+'+'+difn('','y',1,2)+'+'+difn('','z',1,2),
            '（调和函数：满足\\\\text{Laplace方程}Δu=0的函数）',
            ].join(kbr)
            `,`

            [   Eq([['梯度：\\\\r {grad}f','\\\\b ∇ f'],
                    difn('f','x',1)+'\\\\b i+'+difn('f','y',1)+'\\\\b j+'+difn('f','z',1)+'\\\\b k'
                ]),

            ].join(kbr)
            `,`

            [   Eq([['散度：\\\\text{div~}\\\\b a','\\\\b ∇ ⋅\\\\b a'],
                    zp('\\\\b i'+difn('','x',1)+'+\\\\b j'+difn('','y',1)+'+\\\\b k'+difn('','z',1))+'⋅(P\\\\b i+Q\\\\b j+R\\\\b k)',
                    difn('P','x',1)+'+'+difn('Q','y',1)+'+'+difn('R','z',1)
                ]),


            ].join(kbr)
            `,`
            [
                Eq([['旋度：\\\\r {rot~}\\\\b a或\\\\r {curl~}\\\\b a','\\\\b ∇ ×\\\\b a'],
                    zp('\\\\b i'+difn('','x',1)+'+\\\\b j'+difn('','y',1)+'+\\\\b k'+difn('','z',1))+'×(P\\\\b i+Q\\\\b j+R\\\\b k)',
                    '\\\\small '+kdet([['\\\\b i','\\\\b j','\\\\b k'],[difn('','x',1),difn('','y',1),difn('','z',1)],ZLR('P Q R')]),
                    pp(difn('R','y',1)+'-'+difn('Q','z',1))+'\\\\b i+'+pp(difn('P','z',1)+'-'+difn('R','x',1))+'\\\\b j+'+pp(difn('Q','x',1)+'-'+difn('P','y',1))+'\\\\b k'
                ]),
            ].join(kbr)
            `,`
            [
                "（无旋场：\\\\r {rot~}\\\\b a或\\\\r {curl~}\\\\b a = \\\\b ∇ ×\\\\b a = \\\\b 0）",
                "（有势场：\\\\b a=\\\\r {grad~}U，势函数：-U）",
                "（保守场：向量场\\\\b a中曲线积分与路径无关）",
                "（保守场，有势场，无旋场三者等价）"
            ].join(kbr)
            `,`
    

            aligned([
                '\\\\text{div}(λ\\\\b a+μ\\\\b b)=λ~\\\\text{div} \\\\b a+μ~\\\\text{div} \\\\b b'+'&'+
                '\\\\b ∇⋅(λ\\\\b a+μ\\\\b b)=λ(\\\\b ∇⋅\\\\b a)+μ(\\\\b ∇⋅\\\\b b)',

                '\\\\r {rot~}(λ\\\\b a+μ\\\\b b)=λ\\\\r {rot~}\\\\b a+μ\\\\r {rot~} \\\\b b'+'&'+
                '\\\\b ∇×(λ\\\\b a+μ\\\\b b)=λ(\\\\b ∇×\\\\b a)+μ(\\\\b ∇×\\\\b b)',

                '\\\\text{div}(f\\\\b a)=f\\\\text{div} \\\\b a+ \\\\r {grad} f⋅\\\\b a'+'&'+
                '\\\\b ∇⋅(f\\\\b a)=f(\\\\b ∇⋅\\\\b a)+(\\\\b ∇f)⋅\\\\b a',
                
                '\\\\r {rot~}(f\\\\b a)=f\\\\r {rot~} \\\\b a+ \\\\r {grad} f×\\\\b a'+'&'+
                '\\\\b ∇×(f\\\\b a)=f(\\\\b ∇×\\\\b a)+(\\\\b ∇f)×\\\\b a',

                '\\\\text{div}(\\\\b a×\\\\b b)=\\\\b b⋅\\\\r {rot~}(\\\\b a)-\\\\b a⋅\\\\r {rot~}(\\\\b b)'+'&'+
                '\\\\b ∇⋅(\\\\b a×\\\\b b)=\\\\b b⋅(\\\\b ∇×\\\\b a)-\\\\b a⋅(\\\\b ∇×\\\\b b)',

                '\\\\r {rot~}(\\\\r {grad} f)=\\\\b 0'+'&'+
                '\\\\b ∇×(\\\\b ∇f)=(\\\\b ∇×\\\\b ∇)f=\\\\b 0',

                '\\\\text{div}(\\\\r {rot~} \\\\b a)= 0'+'&'+
                '\\\\b ∇⋅(\\\\b ∇×\\\\b a)= 0',          


            ])






        `],1),'',''
        ],


        [brA(['重积分化累次积分','Fubini定理','Cavalieri原理']),hrA([`
            iint('f(x,y)','[a,~b]×[y_1(x),~y_2(x)]','','x,y',2,1)+'='+
            intl('','a','b','x',0,'')+intl('f(x,y)','y_1(x)','y_2(x)','y',0,'')
            `,`

            iint('f(x,y)','[x_1(y),~x_2(y)]×[c,~d]','','x,y',2,1)+'='+
            intl('','c','d','y',0,'')+intl('f(x,y)','x_1(y)','x_2(y)','x',0,'')
            `,`

            iint('f(x)g(y)','[a,~b]×[c,~d]','','x,y',2,1)+
            '='+intl('f(x)','a','b','x',0,'')+'⋅'+intl('g(y)','c','d','y',0,'')
            `,`

            Eq([iint('f(x,y,z)','Ω=[a,~b]×[y_1(x),~y_2(x)]×[z_1(x,y),~z_2(x,y)]','','x,y,z',3,1),
                iint('','Ω_{xy}','','x,y',2,1)+intl('f(x,y,z)','z_1(x,y)','z_2(x,y)','z',0,''),
                intl('','a','b','x',0,'')+intl('','y_1(x)','y_2(x)','y',0,'')+intl('f(x,y,z)','z_1(x,y)','z_2(x,y)','z',0,'')
            ])


        `],1),'',hrA([`
Eq([['（求三维质心坐标）'+kxo('z','-'),kfrac([iint('zρ','Ω','','x,y,z',3,1),iint('ρ','Ω','','x,y,z',3,1)])],

    ['（密度均匀）','1\\\\/V'+iint('z','Ω','','x,y,z',3,1)],

    ['（求二维质心坐标）'+kxo('y','-'),kfrac([iint('yρ','Σ','','x,y',2,1),iint('ρ','Σ','','x,y',2,1)])],

    ['（密度均匀）','1\\\\/S'+iint('y','Σ','','x,y',2,1)],

    ['（求转动惯量）J',iint('r^2','','','m',1,1)],

    ['（求平面转动惯量）',piece([
        'x轴，J_x='+iint('y^2ρ','D','','s',2,1),
        'y轴，J_y='+iint('x^2ρ','D','','s',2,1),
        '原点，J_o='+iint('(x^2+y^2)ρ','D','','s',2,1)+'=J_x+J_y'
    ])],

])`],1)
        ],

        
        ['重积分变量代换',hrA([`
            '（二维）'+iint('f(x,y)','T(D)','','x,y',2,1)+'='+iint('f(x(u,v),~y(u,v))'+zp(difn('(x,y)','(u,v)',1),'|'),'D','','u,v',2,1)
            `,`
            [
                '（推广到高维的向量形式）',
                iint('f(\\\\red x)','D','', '\\\\red x',1,1)+'='+iint('f(\\\\red x(\\\\red u))|\\\\det \\\\red x\\'(\\\\red u)|','D\\'','','\\\\red u',1,1),
                '其中雅可比行列式\\\\det \\\\red x\\'(\\\\red u)='+difn('(x_1,⋯,x_n)','(u_1,⋯,u_n)',1)
            ].join(kbr)


        `],1),'',hrA([`
            '极坐标变换'+piece(['x=r\\\\cosθ','y=r\\\\sinθ'])+
                kbr+'其中r≥0，θ∈[0,2π]'+
                kbr+difn('(x,y)','(r,θ)',1)+'=r'
            `,`
            '广义极坐标变换'+piece(['x=ar\\\\cosθ','y=br\\\\sinθ'])+
                kbr+'其中r≥0，θ∈[0,2π]'+
                kbr+difn('(x,y)','(r,θ)',1)+'=abr'
             `,`

            '柱面坐标变换'+piece(['x=r\\\\cosθ','y=r\\\\sinθ','z=z'])+
                kbr+'其中r≥0，θ∈[0,2π]'+
                kbr+difn('(x,y,z)','(r,θ,z)',1)+'=r'
            `,`
            '球面坐标变换'+piece(['x=r\\\\sinφ\\\\cosθ','y=r\\\\sinφ\\\\sinθ','z=r\\\\cosφ'])+
                kbr+'其中r≥0，φ∈[0,π]，θ∈[0,2π]'+
                kbr+difn('(x,y,z)','(r,φ,θ)',1)+'=r^2\\\\sinφ'
            `,`
            '广义球面坐标变换'+piece(['x=ar\\\\sinφ\\\\cosθ','y=br\\\\sinφ\\\\sinθ','z=cr\\\\cosφ'])+
                kbr+'其中r≥0，φ∈[0,π]，θ∈[0,2π]'+
                kbr+difn('(x,y,z)','(r,φ,θ)',1)+'=abcr^2\\\\sinφ'
            `,`

            '高维球面坐标变换'+'x_i=r\\\\cosφ_i'+prod('k',1,'i-1','\\\\sinφ_k',0,'')+
                kbr+'其中r≥0，'+piece(['φ_n=0','φ_{n-1}∈[0,2π]','φ_1,⋯,φ_{n-2}∈[0,π]'])+
                kbr+difn('(x_1,⋯,x_n)','(φ_1,⋯,φ_n)',1)+'=r^{n-1}'+prod('k',1,'n-2','\\\\sin^{n-1-k}φ_k',0,'')
        `],1)
        ],

    
        ['第一类曲线积分',hrA([`
            '（线性）'+iint('(af+bg)','L','','s',1,1)+'=a'+iint('f','L','','s',1,1)+'+b'+iint('g','L','','s',1,1)
            `,`
            '（路径可加性）'+iint('f','L','','s',1,1)+'='+iint('f','L_1','','s',1,1)+'+'+iint('f','L_2','','s',1,1)+kbr+
                ' （注意，由于\\d s无方向性，积分限都是从小到大）'
            `,`
            '（空间）'+iint('f(x,y,z)','L','','s',1,1)+'='+intl('f(x(t),y(t),z(t))'+kroot('(x\\'^2(t)+y\\'^2(t)+z\\'^2(t)'),'a','b','t',0,'')

            `,`
            '（平面上参数t）'+iint('f(x,y)','L','','s',1,1)+'='+intl('f(x(t),y(t))'+kroot('(x\\'^2(t)+y\\'^2(t)'),'a','b','t',0,'')

            `,`
            '（平面上参数x）'+iint('f(x,y)',['L：y=y(x)','a≤x≤b'],'','s',1,1)+'='+intl('f(x,y(x))'+kroot('(1+y\\'^2(x)'),'a','b','x',0,'')

            `,`
            Eq(['（平面上极坐标）'+iint('f(x,y)','L','','s',1,1),
                intl('f(r\\\\cosθ,r\\\\sinθ)'+kroot('(r^2+r\\'^2(θ)'),'α','β','θ',0,''),
                intl('f(r\\\\cosθ,r\\\\sinθ)'+kroot('(1+r^2θ\\'^2(r)'),'r_1','r_2','r',0,''),

            ]) 


        `],1),'',hrA([`
            ['（空间曲线弧长）L：x=x(t), y=y(t), z=z(t),','a≤t≤b',
                's='+iint('','L','','s',1,1)+'='+intl(kroot('(x\\'^2(t)+y\\'^2(t)+z\\'^2(t)'),'a','b','t',0,'')
            ].join(kbr)
            `,`
            ['（平面曲线弧长）L：y=y(x),','a≤x≤b',
                's='+iint('','L','','s',1,1)+'='+intl(kroot('(1+y\\'^2(x)'),'a','b','x',0,'')
            ].join(kbr)
        `],1)
        ],

    
        ['第一类曲面积分',hrA([`

            [Eq([iint('f(x,y,z)','Σ','','S',2,1)+'='+iint('f(x(u,v),y(u,v),z(u,v))'+kroot('EG-F^2'),'D','','u,v',2,1),
            iint('f(x,y,z(x,y))'+kroot('1+z_x^2+z_y^2'),'D','','x,y',2,1),
            iint('f(x,y,z)'+kfrac([zp('\\\\r {grad}H','‖‖'),'|H_z|']),'D','','x,y',2,1)+'~其中隐函数H(x,y,z)=0'
                ]),
                '\\\\text{其中Gauss系数}，',
                piece(['E=\\\\b r_u^2=x_u^2+y_u^2+z_u^2',
                'F=\\\\b r_u⋅\\\\b r_v=x_ux_v+y_uy_v+z_uz_v',
                'G=\\\\b r_v^2=x_v^2+y_v^2+z_v^2']),
                '\\\\b r_u=x_u\\\\b i+y_u\\\\b j+z_u\\\\b k',
                '\\\\b r_v=x_v\\\\b i+y_v\\\\b j+z_v\\\\b k',
                '\\\\b r_u×\\\\b r_v = '+difn('(y,z)','(u,v)',1)+'\\\\b i +'+difn('(z,x)','(u,v)',1)+'\\\\b j+'+difn('(x,y)','(u,v)',1)+'\\\\b k',
                'EG-F^2='+zp('\\\\b r_u×\\\\b r_v','‖‖')+'^2='+zp(difn('(y,z)','(u,v)',1))+'^2+'+zp(difn('(z,x)','(u,v)',1))+'^2+'+zp(difn('(x,y)','(u,v)',1))+'^2'
            ].join(kbr)


        `],1),'',hrA([`
            ['（曲面面积）Σ',
                'S='+iint('','D','','S',2,1)+'='+iint(kroot('EG-F^2'),'D','','u,v',2,1)
            ].join(kbr)
            `,`

            ['（曲面面积）Σ：z=f(x,y)',
                'S='+iint(kroot('1+f_x^2(x,y)+f_y^2(x,y)'),'D','','x,y',2,1)
            ].join(kbr)
            `,`

            ['（曲面面积）Σ：H(x,y,z)=0',
                Eq([['S',
                    iint(kroot('1+z_x^2+z_y^2'),'D','','x,y',2,1)],
                    iint(kroot('1+'+zp('-'+kfrac(['H_x','H_z']))+'^2+'+zp('-'+kfrac(['H_y','H_z']))+'^2'),'D','','x,y',2,1),
                    iint(kfrac([zp('\\\\r {grad}H','‖‖'),'|H_z|']),'D','','x,y',2,1),
                ])
            ].join(kbr)
        `],1)
        ],

        ['第二类曲线积分',hrA([`
            '（方向性）'+iint('\\\\b f⋅\\\\b τ','L','','s',1,1)+'=-'+iint('\\\\b f⋅\\\\b τ','-L','','s',1,1)
            `,`
            '（线性）'+iint('(a\\\\b f+b\\\\b g)⋅\\\\b τ','L','','s',1,1)+'=a'+iint('\\\\b f⋅\\\\b τ','L','','s',1,1)+'+b'+iint('\\\\b g⋅\\\\b τ','L','','s',1,1)
            `,`
            '（路径可加性）'+iint('\\\\b f⋅\\\\b τ','L','','s',1,1)+'='+iint('\\\\b f⋅\\\\b τ','L_1','','s',1,1)+'+'+iint('\\\\b f⋅\\\\b τ','L_2','','s',1,1)
            `,`
            [Eq([[iint('ω','L','',' ',1,1),iint(['P','+Q','+R'],'L','','x;y;z',1,1)],
                iint('(P\\\\cosα+Q\\\\cosβ+R\\\\cosγ)','L','','s',1,1),
                iint(zp('P\\\\frac{\\\\d x}{\\\\d s}+Q\\\\frac{\\\\d y}{\\\\d s}+R\\\\frac{\\\\d z}{\\\\d s}'),'L','','s',1,1),

                intl('[P(t)x\\'(t)+Q(t)y\\'(t)+R(t)z\\'(t)]','a','b','t',0,''),

                iint('\\\\b f⋅\\\\b τ','L','','s',1,1)+'='+iint('\\\\b f','L','','\\\\b s',1,1)

            ]),'其中\\\\b f(x,y,z)=P(x,y,z)\\\\b i+Q(x,y,z)\\\\b j+R(x,y,z)\\\\b k',

            Eq([['单位切向量\\\\b τ','(\\\\cosα,\\\\cosβ,\\\\cosγ)'],
                kfrac(['\\\\b r_t', zp('\\\\b r_t','‖‖')]),
                kfrac(['(x\\'(t), y\\'(t), z\\'(t))',kroot('x\\'^2(t)+y\\'^2(t)+z\\'^2(t)')])
                
            ]),
            Eq([['\\\\d \\\\b s','\\\\b τ\\\\d s'],
                '(x\\'(t), y\\'(t), z\\'(t))'
            ]),
            '\\\\d s='+kroot('x\\'^2(t)+y\\'^2(t)+z\\'^2(t)')+'\\\\d t',
            ].join(kbr)
            `,`

            '（平面上参数t方程）'+Eq([iint(['P','+Q'],'L','','x;y',1,1),
                iint('(P\\\\cosα+Q\\\\cosβ)','L','','s',1,1),
                iint(zp('P'+kfrac(['x\\'(t)',kroot('x\\'^2(t)+y\\'^2(t)')])+'+Q'+kfrac(['x\\'(t)',kroot('x\\'^2(t)+y\\'^2(t)')])),'L','','s',1,1),
                intl('[P(t)x\\'(t)+Q(t)y\\'(t)]','a','b','t',0,'')
                ])
            `,`
            '（参数x的方程）'+Eq([iint(['P','+Q','+R'],['L：y=y(x)','z=z(x)','a≤x≤b'],'','x;y;z',1,1),
                intl('[P(x,y(x))+Q(x,y(x))y\\'(x)+R(x,y(x))z\\'(x)]','a','b','x',0,'')
                ])
            `,`
            '（平面上）'+Eq([iint(['P','+Q'],['L：y=y(x)','a≤x≤b'],'','x;y',1,1),
                intl('[P(x)+Q(x)y\\'(x)]','a','b','x',0,'')
                ])
            


        `],1),'',hrA([`

        `],1)
        ],

    
        ['第二类曲面积分',hrA([`
            '（方向性）'+iint('\\\\b f⋅\\\\b n','Σ','','S',2,1)+'=-'+iint('\\\\b f⋅\\\\b n','-Σ','','S',2,1)
            `,`
            '（线性）'+iint('(a\\\\b f+b\\\\b g)⋅\\\\b n','Σ','','S',2,1)+'=a'+iint('\\\\b f⋅\\\\b n','Σ','','S',2,1)+'+b'+iint('\\\\b g⋅\\\\b n','Σ','','S',2,1)
            `,`
            '（曲面可加性）'+iint('\\\\b f⋅\\\\b n','Σ','','S',2,1)+'='+iint('\\\\b f⋅\\\\b n','Σ_1','','S',2,1)+'+'+iint('\\\\b f⋅\\\\b n','Σ_2','','S',2,1)
            `,`
            [Eq([[iint('ω','Σ','',' ',2,1),iint(['P','+Q','+R'],'Σ','','y,z;z,x;x,y',2,1)],
                iint('(P\\\\cosα+Q\\\\cosβ+R\\\\cosγ)','Σ','','S',2,1),

                '±'+iint(zp([
                    'P(u,v)'+difn('(y,z)','(u,v)',1),
                    'Q(u,v)'+difn('(z,x)','(u,v)',1),
                    'R(u,v)'+difn('(x,y)','(u,v)',1)
                ].join('+')),'D','','u,v',2,1),

                iint('\\\\b f⋅\\\\b n','Σ','','S',2,1)+'='+iint('\\\\b f','Σ','','\\\\b S',2,1)
            ]),'其中\\\\b f(x,y,z)=P(x,y,z)\\\\b i+Q(x,y,z)\\\\b j+R(x,y,z)\\\\b k',
            Eq([['单位法向量\\\\b n','(\\\\cosα,\\\\cosβ,\\\\cosγ)'],
            kfrac(['\\\\b r_u×\\\\b r_v', zp('\\\\b r_u×\\\\b r_v','‖‖')]),
            '±'+kfrac([1,kroot('EG-F^2')],'',1)+zp([difn('(y,z)','(u,v)',1),difn('(z,x)','(u,v)',1),difn('(x,y)','(u,v)',1)])
            ]),
            Eq([['\\\\d \\\\b S','\\\\b n\\\\d S'],
                '\\\\small '+kdet([['\\\\b i','\\\\b j','\\\\b k'],['∂x','∂y','∂z'],['/∂u','/∂*','/∂v']])+'（行列式按第1行展开，定义得到二阶雅可比行列式）',
            ]),
            '\\\\d S='+kroot('EG-F^2')+'\\\\d u\\\\d v',
            ].join(kbr)
            `,`

            '（参数x,y的方程）'+Eq([iint('R(x,y,z)','Σ：z=z(x,y)','','x,y',2,1),
                    '±'+iint('R(x,y,z(x,y))','D_{xy}','','x,y',2,1),
                ])

        `],1),'',hrA([`

        `],1)

        ],

    ],'wiki TBrc')+
    
    
        
    detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[

        [href(Hs+'wenku.baidu.com/view/f98587e0551810a6f5248693.html','高等数学 理工类 第三版 吴赣昌'),''],



    ],'TBrc'),1)
    )+




    detail(gM('Definite Integral Formula'),Table([gM(ZLR('Form.1 Value Deduction Notes'))],[
        [$js(`intl('\\\\sin^2x','0','π','x',0,'')`),'π\\/2',$js(`Eq([
            intl('\\\\sin^2x','0','π','x',0,''),
            intl('1\\\\/2(1-\\\\cos2x)','0','π','x',0,''),
            intl('1\\\\/2(1)','0','π','x',0,''),
            'π\\\\/2',
        ])`),''],

        $js([`Eq([2+intl('x^n\\sin^2x','0','π','x',0,''),
                2+intl('x^n\\cos^2x','0','π','x',0,''),
                intl('x^n','0','π','x',0,'')
            ])`,`kfrac(['π^{n+1}','n+1'])`,`Eq([
            2+intl('x^n\\sin^2x','0','π','x',0,''),
            intl('x^n⋅2\\sin^2x','0','π','x',0,''),
            intl('x^n(1-\\cos2x)','0','π','x',0,''),
            intl('(x^n-x^n\\cos2x)','0','π','x',0,''),
            intl(zp('\\frac{x^{n+1}}{n+1}-1\\/2x^n{\\sin2x}-n\\/2'+intl('x^{n-1}\\sin2x','','','x',0,'')),'0','π','x',-1,''),
            intl(zp('\\frac{x^{n+1}}{n+1}-n\\/2'+intl('x^{n-1}\\sin2x','','','x',0,'')),'0','π','x',-1,''),
            
            intl(zp('\\frac{x^{n+1}}{n+1}-n\\/4'+zp('-x^{n-1}\\cos2x+1\\/{n-1}'+intl('x^{n-2}\\cos2x','','','x',0,''))),'0','π','x',-1,''),
            '⋯',
            intl('\\frac{x^{n+1}}{n+1}','0','π','x',-1,''),
            kfrac(['π^{n+1}','n+1']),
            intl('x^n','0','π','x',0,'')
        ])`],1),


        $js([`intl('e^{-x^2}','0','+','x',0,'')`,`kfrac(['\\sqrt{π}','2'])`,`Eq([
            intl('e^{-x^2}','0','+','x',0,''),
            kroot(intl('e^{-x^2}','0','+','x',0,'')+'⋅'+intl('e^{-y^2}','0','+','y',0,'')),
            kroot(intl(intl('e^{-(x^2+y^2)}','0','+','x',0,''),'0','+','y',0,'')),
            kroot(intl('','0','π\\/2','θ',0,'')+intl('re^{-r^2}','0','+','r',0,'')),
            kroot(intl('','0','π\\/2','θ',0,'')+intl(zp('-1\\/2e^{-r^2}'),'0','+∞','r',-1,'')),

            kroot(intl('1\\/2','0','π\\/2','θ',0,'')),

            kfrac(['\\sqrt{π}','2'])

        ])`],1).concat(href(Hs+'blog.csdn.net/zhouchangyu1221/article/details/104178387','多种证法')),

        
        $js([`Eq([intl('\\sinc x','0','+','x',0,''),
                intl('{\\sin x}\\/x','0','+','x',0,''),
                intl('{\\sin tx}\\/x','0','+','x',0,'')+'（t>0）'
            ])`,`kfrac(['π','2'])`,`Eq([
            intl('{\\sin x}\\/x','0','+','x',0,''),
            'π\\/2',

        ])`],1).concat(href(Hs+'blog.csdn.net/zhouchangyu1221/article/details/104170834','多种证法')),


        $js([`Eq([['I_n',
                intl('\\sin^n x','0','π\\/2','x',0,'')],
                intl('\\cos^n x','0','π\\/2','x',0,''),
                intl('{n-1}\\/nI_{n-2}','0','π\\/2','x',0,''),

            ])`,`piece(['I_1=1','I_0=π\\/2'])`],1)

    ],'wiki TBrc'))
);