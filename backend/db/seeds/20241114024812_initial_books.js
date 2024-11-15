exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { volume: '1', subtitle: '桜木君', intro: '中学3年間で50人の女の子にふられた桜木花道。高校生となった彼は、ふと声をかけてきた女の子・赤木晴子に性懲りもなく一目惚れ。その「バスケットはお好きですか?」との問いに花道は…!?', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716114.jpg' }, 
    { volume: '2', subtitle: 'NEW POWER GENERATION', intro: '晴れて桜木花道はバスケ部員となった。だが初心者の基礎練習が面白くなく、主将・赤木と日々衝突してばかり。そんな時、1年生対上級生の練習試合で、ライバル・流川の実力を見せつけられて…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716121.jpg'  }, 
    { volume: '3', subtitle: '庶民のシュートは難しい', intro: 'バスケットマン・桜木花道。地道な基礎練習が実を結び、やっとシュート練習をさせてもらえることになった。スラムダンクがしたい花道だが、ドリブルシュートさえもままならず特訓することに…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716138.jpg'  },
    { volume: '4', subtitle: '主役登場！！', intro: '県下ベスト4の強豪・陵南との練習試合が始まった。超高校級の仙道の前に、赤木や頼みの流川さえも押さえ込まれる。そんな中、試合に出してもらえない自称、秘密兵器の桜木花道の苛立ちは募り?', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716145.jpg'  },
    { volume: '5', subtitle: 'REBOUND', intro: '一進一退の攻防を続ける陵南戦に、自称秘密兵器・桜木花道が投入された。流川との意地の張り合いに周りはヒヤヒヤだが、それが功を奏し、3点差にまで追いついた。そして、そこに赤木が戻り…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716152.jpg'  },
    { volume: '6', subtitle: 'NOTHING TO LOSE', intro: '陵南との試合も大詰めとなり、残り1分で4点差と迫った湘北。しかも陵南エースの仙道のシュートを初心者・桜木花道が止め、一挙に逆転ペース。だが、そう簡単には勝たせてくれるはずもなく…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716169.jpg'  },
    { volume: '7', subtitle: 'バスケ部最後の日', intro: '湘北バスケ部の問題児・宮城リョータが帰ってきた。もう一人の問題児・桜木花道と何かともめるが、もてない二人が分かり合うのに時間はかからなかった。だがバスケ部には別の大問題の気配が…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716176.jpg'  },
    { volume: '8', subtitle: 'BASKETBALL', intro: '宮城リョータへの仕返しのため、三井寿が不良仲間と共にバスケ部へ殴り込んできた。無抵抗な部員への暴力に、桜木花道の怒りが爆発! そんな大騒動のなか発覚した、三井の隠された真実とは…?', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716183.jpg'  },
    { volume: '9', subtitle: '問題児軍団', intro: '三井寿が意地とプライドを捨て、バスケがしたい、ただそれだけのために戻ってきた。だが元中学MVPシューターの腕は健在。湘北高問題児軍団、それぞれの想いを胸にインターハイ県予選へ挑む!', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716190.jpg'  },
    { volume: '10', subtitle: 'リバウンド王桜木', intro: 'スタンドが観客で埋まる大会5日目、湘北高は第2シード・翔陽高とあたった。5試合連続退場の桜木花道は、その不名誉な記録をストップすべく試合に臨んだ。自らもうけた課題をクリアできるか?', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716206.jpg'  },
    { volume: '11', subtitle: 'マグレだとしても', intro: '県大会を勝ち進む湘北に立ちはだかった大きな壁。強豪・翔陽の藤真の頭脳プレイに翻弄され、ペースのつかめない湘北。そして2年のブランクにスタミナ切れした、三井が押さえ込まれてしまい…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716213.jpg'  },
    { volume: '12', subtitle: '王者への挑戦', intro: '決勝リーグに進出した湘北は、王者・海南大付属への挑戦権を手にした。神奈川ナンバー1プレイヤー・牧を擁し、常勝を誇る海南に得意のラン&ガンで攻める湘北。桜木のリバウンドも好調だが…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716220.jpg'  },
    { volume: '13', subtitle: 'UNSTOPPABLE', intro: '海南大付属の知将・高頭に「素人」の弱点を見破られてしまった桜木花道。やむなくベンチへ引っ込むが、赤木の負傷にその穴を埋める為、再びコートへ戻る。湘北のゴール下死守の戦いが始まった!', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716237.jpg'  },
    { volume: '14', subtitle: 'THE BEST', intro: '足の怪我を押して主将・赤木が戻り、勢いにのる湘北高校。だがそのやる気に対し、海南・牧はそれに応えるかの如く本領を発揮。そしてシューター・神も活躍し始める。王者・海南に穴はないのか?', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716244.jpg'  },
    { volume: '15', subtitle: '天国と地獄', intro: '海南大付属戦、残り2分。必死で追いすがる湘北だが、なかなか4点差がちぢまらない。百戦錬磨の海南に対し、湘北の面々には体力の限界がきていた。だが勝利への執念の炎は消えていなかった!!', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716251.jpg'  },
    { volume: '16', subtitle: 'サバイバル・ゲーム', intro: '海南戦での痛恨のパスミスのけじめとして、坊主となった桜木花道。決勝リーグ第2戦へ向け、気合いも新たに強化練習を開始した。それは、ゴール下からのシュートを3日で修得する事なのだが…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716268.jpg'  },    
    { volume: '17', subtitle: '最後の椅子', intro: '安西監督が倒れた…? 思わぬ凶報に湘北の面々に動揺がはしる。幸い、桜木の迅速な処置により大事には至らなかったが、陵南戦は間近に迫っていた。インターハイ出場を懸けた勝負の行方は…!?', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716275.jpg'  },
    { volume: '18', subtitle: '落し穴の予感', intro: '全国出場の最後の椅子を懸けた、湘北の戦いが始まった。宿敵・陵南に対し桜木花道を始め、気合いの入る湘北だが主将・赤木に異変が…。勝利へのプレッシャーからか、足のけがが気になりだし…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716282.jpg'  },
    { volume: '19', subtitle: 'エース', intro: '陵南戦26対32で前半終了。湘北は6点のリードを許していた。福田に実力差を見せつけられる桜木花道、そして前半の得点2点のエース・流川。押さえられ気味の湘北の勝負は、残り後半20分!', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716299.jpg'  },
    { volume: '20', subtitle: '湘北崩壊', intro: 'インターハイ出場の切符をめぐる陵南戦、7点のリードで残り8分を迎えた湘北。その後もリードを広げるが、あくまで勝利を信じる陵南サイド。その信頼の眼差しの先には、エース・仙道の存在が!', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716305.jpg'  },
    { volume: '21', subtitle: '勝敗', intro: 'ついに残り2分となった陵南戦。リードしていた湘北だが、仙道の活躍で1点差まで詰め寄られた。さらにスタミナ切れした三井が倒れピンチに。だが、ここから素人・桜木が思わぬ働きをみせて…!', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718415.jpg'  },
    { volume: '22', subtitle: '1st ROUND', intro: '全国大会へ向け、気合いの入った練習に励む湘北高。中でも流川の気迫は鬼気迫るものがあった。それは安西監督に告げられた、日本一の高校生になる為なのだが、そんな流川に桜木が勝負を挑み…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718422.jpg'  },
    { volume: '23', subtitle: 'AランクとCランク', intro: '全国大会用、シュート2万本の特訓をやり遂げた桜木花道。そしていよいよ決戦の地、広島へとやってきた。初戦の相手は大阪代表・豊玉高。豊玉のAランク評価に対し、湘北はCランク評価だが…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718439.jpg'  },
    { volume: '24', subtitle: '勝利のために', intro: '大阪の強豪・豊玉高戦は後半へ突入。豊玉のラン&ガンに押され気味の湘北だが、流川がエースの実力を発揮する。さらに桜木花道が特訓で身につけた、ジャンプシュートを決め勢いづく湘北だが…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718446.jpg'  },
    { volume: '25', subtitle: '最大の挑戦', intro: '日本高校バスケ界の頂点に君臨する、秋田代表・山王工業。その王者に挑戦することになった湘北は、あまりのレベルの違いに圧倒される。だが全国制覇を信じる面々は、断固たる決意を固める!!', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718453.jpg'  },
    { volume: '26', subtitle: 'パワー勝負', intro: '桜木花道とリョータの奇襲のアウリープが成功し、三井の3連続3P。湘北は、思いがけず王者・山王をリードしていた。だが、日本高校ナンバー1プレーヤー・沢北は、その力の差をみせつけ…!?', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718460.jpg'  },
    { volume: '27', subtitle: '湘北 in Trouble', intro: 'インターハイ2回戦、王者・山王工業戦。2点リードで前半を終えた湘北だが、後半開始早々、沢北に逆転の3Pを決められた。そして山王の逆襲が始まり、2分半で14点もの差をつけられて…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718477.jpg'  },
    { volume: '28', subtitle: '2年間', intro: '後半が始まり山王の怒濤の攻撃に為すすべのない湘北。諦めムードの中、シロート桜木が後半初のゴールを決め、湘北はなんとか勢いを取り戻した。だが一人、全国制覇の重圧に負けそうな赤木は…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718484.jpg'  },
    { volume: '29', subtitle: '逸材', intro: 'リバウンド王・桜木花道。その活躍により、湘北はリズムを取り戻し、後半20点以上もあった差を8点にまでちぢめた。ノーマークだった湘北に、焦りムードの山王だがスーパーエース・沢北は…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718491.jpg'  },
    { volume: '30', subtitle: '選手生命', intro: '王者・山王工業との戦いは、残り3分を切った。超高校級エース・沢北の実力に闘志を燃やす流川。そして湘北は、2桁に開いた点差を1桁に追い詰める。だが山王は土壇場の真の強さを見せ始め…。', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718507.jpg'  },
    { volume: '31', subtitle: '湘北高校バスケットボール部', intro: '選手生命に関わるかもしれない、背中の怪我をおし、桜木花道がコートへ帰ってきた。残り1分で5点差。断固たる勝利への決意で、一丸となって戦う湘北。死闘の山王工業戦、勝利を手にできるか?', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088718392.jpg'  }

  ])
}