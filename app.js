// ============================================================
// EXERCISE LIBRARY (80+ exercises, Reformer-focused, all levels)
//
// IMAGE SUPPORT: Each exercise can have an optional `image` field.
// If you upload an image to images/{id}.jpg in the GitHub repo,
// it will automatically display. No image = no problem (uses placeholder).
// ============================================================
const EXERCISES = [

  // ============================================================
  // REFORMER · FOOTWORK SERIES (床上足部系列) - 6 exercises
  // ============================================================
  {
    id: 'footwork-toes', nameZh: '床上脚尖蹬伸', nameEn: 'Footwork on Toes',
    region: 'lower', equip: ['reformer'], level: 'beginner',
    primary: '股四头肌、小腿三头肌', primaryEn: 'Quadriceps, Triceps Surae',
    secondary: '臀大肌、足底', secondaryEn: 'Glutes, Foot Intrinsics',
    purpose: 'Reformer 经典开场，唤醒下肢链', purposeEn: 'Classic Reformer opener, wake up the lower chain',
    cues: {
      simple: [
        { zh: '脚尖踩在脚踏杆边缘，脚跟提起', en: 'Toes on edge of footbar, heels lifted' },
        { zh: '推出去呼气，回来吸气', en: 'Exhale to push out, inhale to return' },
        { zh: '膝盖追着第二脚趾走', en: 'Knees track over second toe' }
      ],
      imagery: [
        { zh: '想象脚踏杆是一片柔软的沙子，脚趾踩进去再把它推开', en: 'Footbar is soft sand — toes press in then push it away' },
        { zh: '弹簧的回弹是一团云，慢慢压回胸前', en: 'Spring rebound is a cloud you slowly compress to your chest' }
      ],
      precise: [
        { zh: '骨盆中立位，腹横肌持续启动', en: 'Neutral pelvis, sustained TVA engagement' },
        { zh: '膝伸时避免过伸锁死', en: 'Avoid hyperextension lock at terminal extension' }
      ]
    },
    errors: ['脚跟掉下来', '膝盖内扣', '腰部代偿前凸']
  },
  {
    id: 'footwork-arches', nameZh: '床上足弓蹬伸', nameEn: 'Footwork on Arches',
    region: 'lower', equip: ['reformer'], level: 'beginner',
    primary: '股四头肌、内收肌', primaryEn: 'Quadriceps, Adductors',
    secondary: '足弓肌、骨盆底', secondaryEn: 'Foot Arch Muscles, Pelvic Floor',
    purpose: '激活足弓与内侧链', purposeEn: 'Activate arches and inner chain',
    cues: {
      simple: [
        { zh: '足弓贴在脚踏杆上', en: 'Arches rest on the footbar' },
        { zh: '脚后跟主动拉向床面', en: 'Heels actively reach back toward the carriage' }
      ],
      imagery: [{ zh: '足弓像吸盘吸住脚踏杆', en: 'Arches like suction cups gripping the bar' }],
      precise: [{ zh: '足底纵弓主动激活，胫骨后肌参与', en: 'Active longitudinal arch, tibialis posterior engaged' }]
    },
    errors: ['足弓塌陷', '脚踝外翻']
  },
  {
    id: 'footwork-heels', nameZh: '床上脚跟蹬伸', nameEn: 'Footwork on Heels',
    region: 'lower', equip: ['reformer'], level: 'beginner',
    primary: '股四头肌、腘绳肌', primaryEn: 'Quadriceps, Hamstrings',
    secondary: '小腿前侧、核心', secondaryEn: 'Tibialis Anterior, Core',
    purpose: '强调腘绳肌长度与小腿前侧', purposeEn: 'Emphasize hamstring length and anterior shin',
    cues: {
      simple: [
        { zh: '脚跟踩，脚尖勾向自己', en: 'Heels press, toes flex toward you' },
        { zh: '感觉腘绳肌在拉长', en: 'Feel the hamstrings lengthening' }
      ],
      imagery: [{ zh: '脚尖像把扇子，慢慢勾向膝盖', en: 'Toes fan back toward the knees' }],
      precise: [{ zh: '踝背屈维持，膝伸时控制不超伸', en: 'Maintain dorsiflexion, control terminal knee extension' }]
    },
    errors: ['脚尖松懈', '膝盖锁死']
  },
  {
    id: 'footwork-tendon-stretch', nameZh: '跟腱伸展', nameEn: 'Tendon Stretch',
    region: 'lower', equip: ['reformer'], level: 'intermediate',
    primary: '小腿三头肌、跟腱', primaryEn: 'Triceps Surae, Achilles',
    secondary: '足底筋膜、核心', secondaryEn: 'Plantar Fascia, Core',
    purpose: '小腿后侧延展、踝关节活动度', purposeEn: 'Calf lengthening and ankle mobility',
    cues: {
      simple: [
        { zh: '推出去后，脚跟主动下沉低于脚踏杆', en: 'After pushing out, drop heels below the footbar' },
        { zh: '保持骨盆稳定不掉', en: 'Pelvis stays stable, no dropping' }
      ],
      imagery: [{ zh: '脚跟像沉入水底', en: 'Heels sink underwater' }],
      precise: [{ zh: '跟腱主动延展，避免代偿性骨盆后倾', en: 'Active Achilles lengthening without posterior pelvic tilt compensation' }]
    },
    errors: ['骨盆侧向掉', '膝盖锁死']
  },
  {
    id: 'footwork-v', nameZh: '床上 V 字位', nameEn: 'Footwork V Position',
    region: 'lower', equip: ['reformer'], level: 'beginner',
    primary: '股四头肌、外旋肌', primaryEn: 'Quadriceps, External Rotators',
    secondary: '内收肌、骨盆底', secondaryEn: 'Adductors, Pelvic Floor',
    purpose: '外旋位下的下肢力量', purposeEn: 'Lower body strength in external rotation',
    cues: {
      simple: [
        { zh: '脚跟并拢，脚尖打开成 V', en: 'Heels together, toes apart in a V' },
        { zh: '推出去时膝盖跟着脚尖方向', en: 'Knees track over toes as you push' }
      ],
      imagery: [{ zh: '想象大腿内侧夹一张纸', en: 'Squeeze a piece of paper between inner thighs' }],
      precise: [{ zh: '髋外旋启动从深层而非膝关节代偿', en: 'External rotation initiates from deep hip, not knee compensation' }]
    },
    errors: ['膝盖塌进来', '脚跟分开']
  },
  {
    id: 'footwork-single-leg', nameZh: '床上单腿蹬伸', nameEn: 'Single Leg Footwork',
    region: 'lower', equip: ['reformer'], level: 'intermediate',
    primary: '股四头肌、臀大肌', primaryEn: 'Quadriceps, Glute Max',
    secondary: '核心稳定肌、臀中肌', secondaryEn: 'Core Stabilizers, Glute Medius',
    purpose: '单侧承重、骨盆稳定', purposeEn: 'Unilateral loading and pelvic stability',
    cues: {
      simple: [
        { zh: '一只脚推，一只脚抱膝靠胸', en: 'One foot pushes, the other knee hugs in' },
        { zh: '骨盆保持水平不掉', en: 'Pelvis stays level, no dropping' }
      ],
      imagery: [{ zh: '骨盆像一个水平仪，不能倾斜', en: 'Pelvis is a spirit level — don\'t let it tilt' }],
      precise: [{ zh: '臀中肌主动防止骨盆下掉（Trendelenburg sign）', en: 'Glute medius prevents pelvic drop' }]
    },
    errors: ['骨盆侧倾', '抱膝那侧背部紧张']
  },

  // ============================================================
  // REFORMER · LEG / GLUTE WORK (下肢 / 臀部) - 8 exercises
  // ============================================================
  {
    id: 'leg-circles-reformer', nameZh: '床上腿画圈', nameEn: 'Leg Circles on Reformer',
    region: 'lower', equip: ['reformer'], level: 'intermediate',
    primary: '髋屈肌、臀肌', primaryEn: 'Hip Flexors, Glutes',
    secondary: '腹横肌、内收肌', secondaryEn: 'TVA, Adductors',
    purpose: '髋关节多平面控制', purposeEn: 'Multi-planar hip control',
    cues: {
      simple: [
        { zh: '腿画大圈，骨盆不动', en: 'Big leg circles, still pelvis' },
        { zh: '从髋关节发力，不是腰', en: 'Move from the hip joint, not the lower back' }
      ],
      imagery: [{ zh: '腿尖在天花板上画一个完美的圆', en: 'Toes paint a perfect circle on the ceiling' }],
      precise: [{ zh: '骨盆与腰椎稳定，髋关节独立运动', en: 'Pelvis & lumbar stable, hip moves independently' }]
    },
    errors: ['骨盆跟着晃', '腰椎离开床面']
  },
  {
    id: 'frog-reformer', nameZh: '青蛙腿', nameEn: 'Frog',
    region: 'lower', equip: ['reformer'], level: 'beginner',
    primary: '内收肌、髋屈肌', primaryEn: 'Adductors, Hip Flexors',
    secondary: '腹横肌、骨盆底', secondaryEn: 'TVA, Pelvic Floor',
    purpose: '髋关节内外旋激活、骨盆稳定基础', purposeEn: 'Hip rotation activation, pelvic stability fundamentals',
    cues: {
      simple: [
        { zh: '脚跟并拢，脚尖打开', en: 'Heels together, toes apart' },
        { zh: '伸直时骨盆不能后倾', en: 'No posterior tilt as legs extend' }
      ],
      imagery: [{ zh: '像青蛙在水中划水，缓慢有力', en: 'Frog kicking through water — slow and powerful' }],
      precise: [{ zh: '髋外旋配合伸展，避免骨盆代偿', en: 'External rotation with extension, no pelvic compensation' }]
    },
    errors: ['腰椎前凸', '膝盖伸直时骨盆翘起']
  },
  {
    id: 'long-spine-stretch', nameZh: '长脊柱伸展', nameEn: 'Long Spine Stretch',
    region: 'spine', equip: ['reformer'], level: 'intermediate',
    primary: '腘绳肌、脊柱伸肌', primaryEn: 'Hamstrings, Spinal Extensors',
    secondary: '臀大肌、核心', secondaryEn: 'Glutes, Core',
    purpose: '脊柱节段控制 + 腘绳肌延展', purposeEn: 'Spinal articulation with hamstring lengthening',
    cues: {
      simple: [
        { zh: '腿往天花板举起，再一节一节卷下骨盆', en: 'Legs to ceiling, then roll the pelvis up vertebra by vertebra' }
      ],
      imagery: [{ zh: '脊柱像一串项链，慢慢挂回床面', en: 'Spine like beads slowly placed back down' }],
      precise: [{ zh: '骨盆后倾启动，胸椎逐节屈曲然后伸展', en: 'Posterior tilt initiates, thoracic articulates segmentally' }]
    },
    errors: ['靠腘绳代偿甩腿上去', '颈部紧张']
  },
  {
    id: 'short-spine', nameZh: '短脊柱', nameEn: 'Short Spine',
    region: 'spine', equip: ['reformer'], level: 'advanced',
    primary: '核心、脊柱伸肌', primaryEn: 'Core, Spinal Extensors',
    secondary: '腘绳肌、臀大肌', secondaryEn: 'Hamstrings, Glutes',
    purpose: '高级脊柱卷动控制', purposeEn: 'Advanced spinal articulation control',
    cues: {
      simple: [
        { zh: '腿在头顶上方，脊柱卷起再缓慢卷下', en: 'Legs overhead, spine rolls up then slowly down' }
      ],
      imagery: [{ zh: '身体像一只蜗牛，慢慢卷起又展开', en: 'Body curls and uncurls like a snail' }],
      precise: [{ zh: '深层核心控制减速，避免冲击颈椎', en: 'Deep core decelerates the descent, no cervical loading' }]
    },
    errors: ['压颈椎', '骨盆掉太快']
  },
  {
    id: 'reformer-bridge', nameZh: '床上臀桥', nameEn: 'Reformer Bridge',
    region: 'lower', equip: ['reformer'], level: 'beginner',
    primary: '臀大肌、腘绳肌', primaryEn: 'Glute Max, Hamstrings',
    secondary: '腹横肌、骨盆底', secondaryEn: 'TVA, Pelvic Floor',
    purpose: '床面不稳定下的臀部激活', purposeEn: 'Glute activation on unstable surface',
    cues: {
      simple: [
        { zh: '尾骨先离开床面，一节一节卷起来', en: 'Tailbone lifts first, peel up vertebrae' },
        { zh: '夹臀上来，不靠腰', en: 'Lift through the glutes, not the lumbar' }
      ],
      imagery: [{ zh: '骨盆像一只碗，慢慢端平再提起', en: 'Pelvis is a bowl — level it, then lift' }],
      precise: [{ zh: '骨盆后倾启动，臀大肌主导髋伸', en: 'PPT initiation, glute max drives hip extension' }]
    },
    errors: ['腰椎过度伸展', '床面晃动']
  },
  {
    id: 'jumpboard-basic', nameZh: '跳板基础跳', nameEn: 'Jumpboard Basic Jump',
    region: 'full', equip: ['reformer'], level: 'intermediate',
    primary: '股四头肌、臀肌、小腿', primaryEn: 'Quads, Glutes, Calves',
    secondary: '核心、足底', secondaryEn: 'Core, Foot Intrinsics',
    purpose: '低冲击有氧 + 下肢爆发力', purposeEn: 'Low-impact cardio with lower body power',
    cues: {
      simple: [
        { zh: '推出去脚离开跳板，落下时脚跟先碰', en: 'Push off the board, land heel-first' },
        { zh: '腰背贴着床面不晃', en: 'Lower back stays grounded' }
      ],
      imagery: [{ zh: '像悬浮在水中跳跃，轻柔但有力', en: 'Bouncing through water — light but powerful' }],
      precise: [{ zh: '离心阶段控制核心防止腰椎前凸', en: 'Eccentric phase, core prevents lumbar extension' }]
    },
    errors: ['脚尖先落地', '腰背离开床面']
  },
  {
    id: 'side-lying-leg-press', nameZh: '侧躺腿推', nameEn: 'Side-Lying Leg Press',
    region: 'lower', equip: ['reformer'], level: 'intermediate',
    primary: '臀中肌、外侧链', primaryEn: 'Glute Medius, Lateral Chain',
    secondary: '核心、内收肌', secondaryEn: 'Core, Adductors',
    purpose: '侧链稳定 + 髋外展力量', purposeEn: 'Lateral chain stability + hip abduction strength',
    cues: {
      simple: [
        { zh: '侧躺，下面那条腿推动床面', en: 'Side-lying, bottom leg drives the carriage' },
        { zh: '骨盆叠齐不要前后倒', en: 'Pelvis stacked, no forward/backward roll' }
      ],
      imagery: [{ zh: '从头到脚跟拉出一条直线', en: 'Long line from crown to bottom heel' }],
      precise: [{ zh: '臀中肌后束启动，避免阔筋膜张肌主导', en: 'Posterior glute medius engages, not TFL' }]
    },
    errors: ['骨盆前倒', '上身扭转']
  },
  {
    id: 'standing-lunge-reformer', nameZh: '床上站姿弓步', nameEn: 'Standing Lunge on Reformer',
    region: 'lower', equip: ['reformer'], level: 'advanced',
    primary: '股四头肌、臀大肌', primaryEn: 'Quads, Glute Max',
    secondary: '核心稳定肌、髋屈肌', secondaryEn: 'Core Stabilizers, Hip Flexors',
    purpose: '不稳定平面下的功能性下肢', purposeEn: 'Functional lower body on unstable surface',
    cues: {
      simple: [
        { zh: '前腿在跳板上，后腿在床面上', en: 'Front foot on platform, back foot on carriage' },
        { zh: '上身挺直，膝盖追脚尖', en: 'Torso upright, knee tracks toe' }
      ],
      imagery: [{ zh: '像电梯垂直下沉再推起', en: 'Elevator going straight down then up' }],
      precise: [{ zh: '后腿髋屈肌持续延展，前腿髋伸主导', en: 'Back hip flexor lengthens, front hip extension dominates' }]
    },
    errors: ['上身前倾', '膝盖内扣', '床面晃动']
  },

  // ============================================================
  // REFORMER · UPPER BODY (上肢) - 8 exercises
  // ============================================================
  {
    id: 'arms-supine-pull', nameZh: '仰卧拉绳', nameEn: 'Arms Supine Pull',
    region: 'upper', equip: ['reformer'], level: 'beginner',
    primary: '背阔肌、菱形肌', primaryEn: 'Lats, Rhomboids',
    secondary: '后三角肌、核心', secondaryEn: 'Posterior Deltoid, Core',
    purpose: '激活后链，对抗圆肩', purposeEn: 'Activate posterior chain, counter rounded shoulders',
    cues: {
      simple: [
        { zh: '手柄拉到髋部两侧', en: 'Pull straps down to hips' },
        { zh: '肩胛骨先下沉再发力', en: 'Depress scapulae before pulling' }
      ],
      imagery: [{ zh: '胳肢窝下夹一颗橘子', en: 'Squeeze an orange under each armpit' }],
      precise: [{ zh: '背阔肌主导，避免上斜方耸肩', en: 'Lats lead, no upper trap shrug' }]
    },
    errors: ['耸肩', '肘部代偿']
  },
  {
    id: 'arms-supine-circle', nameZh: '仰卧手臂画圈', nameEn: 'Arms Supine Circles',
    region: 'upper', equip: ['reformer'], level: 'beginner',
    primary: '三角肌、肩袖', primaryEn: 'Deltoids, Rotator Cuff',
    secondary: '背阔肌、核心', secondaryEn: 'Lats, Core',
    purpose: '肩关节多平面活动度', purposeEn: 'Multi-planar shoulder mobility',
    cues: {
      simple: [
        { zh: '手臂画大圈，肩胛骨贴床', en: 'Big arm circles, scapulae anchored' }
      ],
      imagery: [{ zh: '指尖在头顶画一个完整的彩虹', en: 'Fingertips draw a full rainbow overhead' }],
      precise: [{ zh: '盂肱关节运动，肩胛胸壁保持稳定', en: 'GH joint moves, ST joint stable' }]
    },
    errors: ['肩胛飞起', '动作变小变快']
  },
  {
    id: 'chest-expansion-reformer', nameZh: '床上胸腔扩张', nameEn: 'Chest Expansion on Reformer',
    region: 'upper', equip: ['reformer'], level: 'beginner',
    primary: '背阔肌、菱形肌', primaryEn: 'Lats, Rhomboids',
    secondary: '后三角肌、深层颈屈肌', secondaryEn: 'Posterior Deltoid, Deep Cervical Flexors',
    purpose: '坐姿/跪姿下激活后链', purposeEn: 'Posterior activation in upright posture',
    cues: {
      simple: [
        { zh: '跪坐，手柄拉到大腿后方', en: 'Kneel, pull straps behind thighs' },
        { zh: '胸口打开，看向远方', en: 'Open chest, gaze far' }
      ],
      imagery: [{ zh: '心口像一朵盛开的花', en: 'Heart blooms like a flower' }],
      precise: [{ zh: '中下斜方启动，避免腰椎过伸', en: 'Mid/lower trap engages, no lumbar hyperextension' }]
    },
    errors: ['塌腰', '耸肩']
  },
  {
    id: 'rowing-back', nameZh: '划船 1 · 背部', nameEn: 'Rowing Back',
    region: 'upper', equip: ['reformer'], level: 'intermediate',
    primary: '背阔肌、菱形肌、核心', primaryEn: 'Lats, Rhomboids, Core',
    secondary: '腘绳肌、脊柱屈肌', secondaryEn: 'Hamstrings, Spinal Flexors',
    purpose: '坐姿动态后链 + 脊柱控制', purposeEn: 'Seated dynamic posterior chain + spinal control',
    cues: {
      simple: [
        { zh: '坐姿，从胸口卷下再展开', en: 'Seated, roll down through the chest then unfurl' },
        { zh: '手肘贴近身体后拉', en: 'Elbows hug ribs as you pull back' }
      ],
      imagery: [{ zh: '像一艘船在波浪中划行', en: 'Boat rowing through waves' }],
      precise: [{ zh: '骨盆后倾配合脊柱屈曲，再节段性延展', en: 'PPT with spinal flexion, then segmental extension' }]
    },
    errors: ['坐骨翘起', '颈部紧张']
  },
  {
    id: 'rowing-front', nameZh: '划船 2 · 前侧', nameEn: 'Rowing Front',
    region: 'upper', equip: ['reformer'], level: 'intermediate',
    primary: '前三角肌、胸大肌', primaryEn: 'Anterior Deltoid, Pectorals',
    secondary: '前锯肌、核心', secondaryEn: 'Serratus Anterior, Core',
    purpose: '坐姿前推 + 肩胛稳定', purposeEn: 'Seated push pattern + scapular stability',
    cues: {
      simple: [
        { zh: '坐姿，手臂从胸前推向天花板', en: 'Seated, press arms from chest to ceiling' }
      ],
      imagery: [{ zh: '像把一颗气球轻轻推向天花板', en: 'Press a balloon up to the ceiling' }],
      precise: [{ zh: '前锯肌完成肩胛上回旋', en: 'Serratus completes scapular upward rotation' }]
    },
    errors: ['肘部锁死', '耸肩']
  },
  {
    id: 'tricep-press-reformer', nameZh: '床上三头肌推', nameEn: 'Tricep Press on Reformer',
    region: 'upper', equip: ['reformer'], level: 'beginner',
    primary: '三头肌', primaryEn: 'Triceps',
    secondary: '前三角肌、核心', secondaryEn: 'Anterior Deltoid, Core',
    purpose: '后臂塑形 + 肩胛稳定', purposeEn: 'Tricep toning + scapular stability',
    cues: {
      simple: [
        { zh: '手肘贴近耳朵，前臂下推', en: 'Elbows by ears, forearms press down' }
      ],
      imagery: [{ zh: '从肘往外推出一道光', en: 'Send light out through the elbows' }],
      precise: [{ zh: '肱三头肌长头主导，肘屈伸控制在矢状面', en: 'Long head of triceps drives, elbow stays sagittal' }]
    },
    errors: ['手肘外翻', '耸肩']
  },
  {
    id: 'biceps-kneeling', nameZh: '跪姿二头', nameEn: 'Kneeling Biceps Curl',
    region: 'upper', equip: ['reformer'], level: 'beginner',
    primary: '二头肌、肱肌', primaryEn: 'Biceps, Brachialis',
    secondary: '核心、深层颈屈肌', secondaryEn: 'Core, Deep Cervical Flexors',
    purpose: '上肢前侧 + 跪姿核心', purposeEn: 'Anterior arm + kneeling core',
    cues: {
      simple: [
        { zh: '跪姿坐高，手肘贴肋', en: 'Kneeling tall, elbows pinned to ribs' }
      ],
      imagery: [{ zh: '头顶像被一根线吊起来', en: 'Crown lifted by a string' }],
      precise: [{ zh: '肘关节单一平面屈伸，骨盆中立', en: 'Single-plane elbow flexion, neutral pelvis' }]
    },
    errors: ['塌腰', '肘部前后摆动']
  },
  {
    id: 'serratus-punch', nameZh: '前锯肌出拳', nameEn: 'Serratus Punch',
    region: 'upper', equip: ['reformer'], level: 'intermediate',
    primary: '前锯肌', primaryEn: 'Serratus Anterior',
    secondary: '核心、深层颈屈肌', secondaryEn: 'Core, Deep Cervical Flexors',
    purpose: '激活前锯肌、改善翼状肩胛', purposeEn: 'Activate serratus, address winged scapula',
    cues: {
      simple: [
        { zh: '手臂伸直推出去，最后再"多推一点"让肩胛打开', en: 'Reach long, then "punch a little more" to protract scapulae' }
      ],
      imagery: [{ zh: '像把空气从肩胛中间推走', en: 'Push the air from between your shoulder blades' }],
      precise: [{ zh: '肩胛前伸（protraction）由前锯肌主导，无菱形肌代偿', en: 'Scapular protraction by serratus, no rhomboid override' }]
    },
    errors: ['菱形肌代偿耸起', '只是手臂伸直没启动肩胛']
  },

  // ============================================================
  // REFORMER · SPINE / FLEXIBILITY (脊柱 / 柔韧) - 6 exercises
  // ============================================================
  {
    id: 'cat-reformer', nameZh: '床上猫式', nameEn: 'Cat on Reformer',
    region: 'spine', equip: ['reformer'], level: 'beginner',
    primary: '脊柱屈肌、伸肌', primaryEn: 'Spinal Flexors and Extensors',
    secondary: '核心、肩稳定肌', secondaryEn: 'Core, Shoulder Stabilizers',
    purpose: '脊柱节段性活动', purposeEn: 'Spinal articulation',
    cues: {
      simple: [
        { zh: '四足跪在床上，脊柱波浪式起伏', en: 'Quadruped on carriage, spine waves up and down' }
      ],
      imagery: [{ zh: '脊柱像一条波浪从尾骨到头顶', en: 'Spine waves from tail to crown' }],
      precise: [{ zh: '从骨盆启动屈曲，逐节传递至颈椎', en: 'Initiates from pelvis, sequences to cervical' }]
    },
    errors: ['只动腰', '床面晃动']
  },
  {
    id: 'mermaid-reformer', nameZh: '床上美人鱼', nameEn: 'Mermaid on Reformer',
    region: 'spine', equip: ['reformer'], level: 'beginner',
    primary: '腹斜肌、腰方肌', primaryEn: 'Obliques, QL',
    secondary: '背阔肌', secondaryEn: 'Lats',
    purpose: '侧屈延展，平衡侧链', purposeEn: 'Lateral flexion, balance lateral chain',
    cues: {
      simple: [
        { zh: '坐姿侧屈，先长高再倒下去', en: 'Seated, lengthen up first then tip over' },
        { zh: '两侧坐骨保持着地', en: 'Both sit bones grounded' }
      ],
      imagery: [{ zh: '身体像彩虹长长地拱起', en: 'Body arches like a rainbow' }],
      precise: [{ zh: '侧屈伴随脊柱延长，无侧腰压缩', en: 'Lateral flexion with elongation, no compression' }]
    },
    errors: ['坐骨翘起', '塌侧腰']
  },
  {
    id: 'long-stretch', nameZh: '长伸展', nameEn: 'Long Stretch',
    region: 'core', equip: ['reformer'], level: 'intermediate',
    primary: '核心、前锯肌', primaryEn: 'Core, Serratus',
    secondary: '臀大肌、肩稳定肌', secondaryEn: 'Glutes, Shoulder Stabilizers',
    purpose: '动态平板支撑、整体抗伸展', purposeEn: 'Dynamic plank, total anti-extension',
    cues: {
      simple: [
        { zh: '从平板姿势床面前后滑动', en: 'Plank position, slide carriage in and out' },
        { zh: '从头到脚跟一条直线', en: 'Straight line head to heels' }
      ],
      imagery: [{ zh: '把床面推开像推一艘船', en: 'Push the carriage like pushing a boat' }],
      precise: [{ zh: '前锯肌锁定肩胛，腹横肌防腰下塌', en: 'Serratus locks scapulae, TVA prevents lumbar sag' }]
    },
    errors: ['臀部翘起或下塌', '床面控制不住']
  },
  {
    id: 'down-stretch', nameZh: '向下伸展', nameEn: 'Down Stretch',
    region: 'spine', equip: ['reformer'], level: 'intermediate',
    primary: '脊柱伸肌、髋屈肌', primaryEn: 'Spinal Extensors, Hip Flexors',
    secondary: '臀大肌、肩稳定肌', secondaryEn: 'Glutes, Shoulder Stabilizers',
    purpose: '前侧延展 + 胸椎伸展', purposeEn: 'Anterior lengthening + thoracic extension',
    cues: {
      simple: [
        { zh: '跪姿手扶脚踏杆，胸口往前推', en: 'Kneeling, hands on bar, press chest forward' }
      ],
      imagery: [{ zh: '胸口像太阳升起', en: 'Chest rises like the sun' }],
      precise: [{ zh: '胸椎主导伸展，避免腰椎代偿', en: 'Thoracic leads, no lumbar compensation' }]
    },
    errors: ['塌腰', '颈部后仰']
  },
  {
    id: 'elephant', nameZh: '大象式', nameEn: 'Elephant',
    region: 'spine', equip: ['reformer'], level: 'beginner',
    primary: '腘绳肌、核心', primaryEn: 'Hamstrings, Core',
    secondary: '肩稳定肌、脊柱屈肌', secondaryEn: 'Shoulder Stabilizers, Spinal Flexors',
    purpose: '腘绳延展 + 脊柱屈曲控制', purposeEn: 'Hamstring stretch + flexion control',
    cues: {
      simple: [
        { zh: '站在床面上，手扶脚踏杆，背部圆起', en: 'Stand on carriage, hands on bar, round the back' }
      ],
      imagery: [{ zh: '把肚脐吸到天花板', en: 'Suck the navel to the ceiling' }],
      precise: [{ zh: '腰椎屈曲为主，腹横肌持续启动', en: 'Lumbar flexion-dominant, sustained TVA' }]
    },
    errors: ['膝盖锁死', '腰塌']
  },
  {
    id: 'spine-stretch-forward', nameZh: '脊柱前伸', nameEn: 'Spine Stretch Forward',
    region: 'spine', equip: ['reformer', 'mat'], level: 'beginner',
    primary: '脊柱屈肌、腘绳肌', primaryEn: 'Spinal Flexors, Hamstrings',
    secondary: '核心、肩稳定肌', secondaryEn: 'Core, Shoulder Stabilizers',
    purpose: '坐姿脊柱节段屈曲', purposeEn: 'Seated segmental spinal flexion',
    cues: {
      simple: [
        { zh: '坐姿，从头开始一节一节往前卷', en: 'Seated, roll forward starting from the head' }
      ],
      imagery: [{ zh: '想象越过一面墙再回来', en: 'Reach over a wall, then return' }],
      precise: [{ zh: '颈胸腰段依次屈曲，骨盆中立', en: 'Sequential flexion C→T→L, neutral pelvis' }]
    },
    errors: ['坐骨翘起', '只动腰']
  },

  // ============================================================
  // CORE / 核心 - 12 exercises
  // ============================================================
  {
    id: 'hundred', nameZh: '百次拍击', nameEn: 'The Hundred',
    region: 'core', equip: ['mat', 'reformer'], level: 'beginner',
    primary: '腹横肌、腹直肌', primaryEn: 'TVA, Rectus Abdominis',
    secondary: '髋屈肌、肩稳定肌', secondaryEn: 'Hip Flexors, Shoulder Stabilizers',
    purpose: '激活深层核心，建立呼吸节奏', purposeEn: 'Activate deep core, breath rhythm',
    cues: {
      simple: [
        { zh: '吸气 2、3、4、5；呼气 2、3、4、5', en: 'Inhale 2,3,4,5; Exhale 2,3,4,5' },
        { zh: '手臂用力拍击空气', en: 'Pump the arms with intention' },
        { zh: '下巴轻收，看向肚脐', en: 'Chin tucked, gaze to navel' }
      ],
      imagery: [
        { zh: '想象肚脐贴向脊柱，把腰背压平', en: 'Draw navel to spine, press low back into mat' },
        { zh: '手臂像拍打温热的水面', en: 'Arms tap warm water' },
        { zh: '胸腔像折叠的扇子', en: 'Ribcage like a folding fan' }
      ],
      precise: [
        { zh: '启动腹横肌、维持骨盆中立位', en: 'Engage TVA, maintain neutral pelvis' },
        { zh: '肩胛骨下沉远离耳朵', en: 'Scapulae depressed away from ears' },
        { zh: '腹斜肌主动控制肋骨下降', en: 'Obliques actively control rib descent' }
      ]
    },
    errors: ['颈部代偿用力', '腰椎离开垫面', '手臂过高，肩膀紧张']
  },
  {
    id: 'roll-up', nameZh: '卷上卷下', nameEn: 'Roll Up',
    region: 'core', equip: ['mat'], level: 'beginner',
    primary: '腹直肌、腹横肌', primaryEn: 'Rectus Abdominis, TVA',
    secondary: '髋屈肌、脊柱伸肌', secondaryEn: 'Hip Flexors, Spinal Extensors',
    purpose: '脊柱节段性控制', purposeEn: 'Segmental spinal articulation',
    cues: {
      simple: [
        { zh: '吸气准备，呼气一节一节卷起来', en: 'Inhale, exhale roll up vertebra by vertebra' },
        { zh: '下来时更慢，控制每一节', en: 'Slower descent, control each vertebra' }
      ],
      imagery: [
        { zh: '脊柱像珍珠项链一颗一颗放回', en: 'Spine like pearls placed one by one' },
        { zh: '尾骨像锚一样固定', en: 'Tailbone anchored' }
      ],
      precise: [
        { zh: '腹横肌优先启动再做脊柱屈曲', en: 'TVA first, then spinal flexion' },
        { zh: '坐骨稳定下压，髋屈肌不主导', en: 'Sit bones grounded, no hip flexor dominance' }
      ]
    },
    errors: ['靠惯性甩起来', '脖子紧张', '腰椎一段坍下']
  },
  {
    id: 'single-leg-stretch', nameZh: '单腿伸展', nameEn: 'Single Leg Stretch',
    region: 'core', equip: ['mat'], level: 'beginner',
    primary: '腹直肌、腹斜肌', primaryEn: 'Rectus, Obliques',
    secondary: '髋屈肌、伸肌', secondaryEn: 'Hip Flexors and Extensors',
    purpose: '核心稳定下的下肢交替', purposeEn: 'Core stability with alternating legs',
    cues: {
      simple: [
        { zh: '一腿伸直一腿抱膝交替', en: 'One long, one in, alternate' },
        { zh: '上身保持稳定不晃动', en: 'Upper body stays still' }
      ],
      imagery: [{ zh: '骨盆是一杯水不能洒', en: 'Pelvis is a glass — don\'t spill' }],
      precise: [{ zh: '骨盆稳定+腰椎中立', en: 'Pelvic stability + lumbar neutral' }]
    },
    errors: ['骨盆晃动', '上身随腿起伏']
  },
  {
    id: 'double-leg-stretch', nameZh: '双腿伸展', nameEn: 'Double Leg Stretch',
    region: 'core', equip: ['mat'], level: 'intermediate',
    primary: '腹直肌、腹横肌', primaryEn: 'Rectus, TVA',
    secondary: '髋屈肌、肩稳定肌', secondaryEn: 'Hip Flexors, Shoulder Stabilizers',
    purpose: '核心向心控制 + 四肢延展', purposeEn: 'Concentric core control + limb reach',
    cues: {
      simple: [
        { zh: '吸气展开四肢，呼气抱回中心', en: 'Inhale extend limbs, exhale pull back to center' }
      ],
      imagery: [{ zh: '像海星打开又合拢', en: 'Like a starfish opening and closing' }],
      precise: [{ zh: '伸展时骨盆不能后倾', en: 'No PPT during extension' }]
    },
    errors: ['腰椎离开垫面', '颈部紧张']
  },
  {
    id: 'criss-cross', nameZh: '交叉扭转', nameEn: 'Criss-Cross',
    region: 'core', equip: ['mat'], level: 'intermediate',
    primary: '腹斜肌', primaryEn: 'Obliques',
    secondary: '腹直肌、腹横肌', secondaryEn: 'Rectus, TVA',
    purpose: '躯干旋转、强化腰围', purposeEn: 'Trunk rotation, sculpt waistline',
    cues: {
      simple: [
        { zh: '手肘找对角的膝盖', en: 'Elbow to opposite knee' },
        { zh: '是胸腔在转不是手肘', en: 'Rotate from ribcage' }
      ],
      imagery: [{ zh: '拧毛巾一样把腰围拧紧', en: 'Wring out the waist like a towel' }],
      precise: [{ zh: '腹斜肌驱动胸腰段旋转，骨盆稳定', en: 'Obliques drive thoracolumbar rotation, stable pelvis' }]
    },
    errors: ['只动手肘', '骨盆跟着转']
  },
  {
    id: 'plank', nameZh: '平板支撑', nameEn: 'Plank',
    region: 'core', equip: ['mat'], level: 'beginner',
    primary: '腹横肌、腹直肌', primaryEn: 'TVA, Rectus',
    secondary: '前锯肌、臀肌', secondaryEn: 'Serratus, Glutes',
    purpose: '全身性抗伸展稳定', purposeEn: 'Full-body anti-extension',
    cues: {
      simple: [
        { zh: '从头到脚跟一条直线', en: 'Straight line head to heels' },
        { zh: '肩膀推开地板', en: 'Push the floor away' }
      ],
      imagery: [{ zh: '一块木板顶在背上不能滑', en: 'A plank on your back — don\'t let it slide' }],
      precise: [{ zh: '前锯肌维持肩胛贴附，TVA防腰下沉', en: 'Serratus maintains scap protraction, TVA prevents lumbar sag' }]
    },
    errors: ['臀部翘起', '腰部下塌']
  },
  {
    id: 'side-plank', nameZh: '侧平板', nameEn: 'Side Plank',
    region: 'core', equip: ['mat'], level: 'intermediate',
    primary: '腰方肌、腹斜肌', primaryEn: 'QL, Obliques',
    secondary: '臀中肌、肩稳定肌', secondaryEn: 'Glute Medius, Shoulder Stabilizers',
    purpose: '侧链稳定性', purposeEn: 'Lateral chain stability',
    cues: {
      simple: [
        { zh: '髋部往天花板顶起来', en: 'Lift hips toward ceiling' }
      ],
      imagery: [{ zh: '身体像一根紧绷的弦', en: 'Body is a taut string' }],
      precise: [{ zh: '臀中肌主动外展维持骨盆中立', en: 'Glute medius keeps neutral pelvis' }]
    },
    errors: ['髋部下沉', '肩膀塌']
  },
  {
    id: 'teaser', nameZh: '挑战者', nameEn: 'Teaser',
    region: 'core', equip: ['mat', 'reformer'], level: 'advanced',
    primary: '腹直肌、髋屈肌', primaryEn: 'Rectus, Hip Flexors',
    secondary: '腹横肌、脊柱稳定肌', secondaryEn: 'TVA, Spinal Stabilizers',
    purpose: '核心力量与平衡综合', purposeEn: 'Core strength + balance',
    cues: {
      simple: [
        { zh: '身体形成 V 字', en: 'Body forms a V' },
        { zh: '从肚脐发力慢慢卷起', en: 'Lead from navel, roll up slowly' }
      ],
      imagery: [{ zh: '像一片漂浮的叶子', en: 'Float like a leaf' }],
      precise: [{ zh: 'PPT配合脊柱屈曲控制重心', en: 'PPT with spinal flexion to control COM' }]
    },
    errors: ['脖子代偿', '腰椎塌陷']
  },
  {
    id: 'roll-over', nameZh: '翻滚向后', nameEn: 'Roll Over',
    region: 'core', equip: ['mat'], level: 'advanced',
    primary: '腹直肌、腹横肌', primaryEn: 'Rectus, TVA',
    secondary: '脊柱屈肌、髋屈肌', secondaryEn: 'Spinal Flexors, Hip Flexors',
    purpose: '逆向脊柱屈曲控制', purposeEn: 'Reverse spinal articulation',
    cues: {
      simple: [
        { zh: '腿抬过头顶，再一节一节卷下', en: 'Legs overhead, then roll down vertebra by vertebra' }
      ],
      imagery: [{ zh: '把脊柱像绸缎一样铺回床面', en: 'Lay the spine down like silk' }],
      precise: [{ zh: '深层核心控制下落速度，无颈椎冲击', en: 'Deep core decelerates, no cervical loading' }]
    },
    errors: ['腿砸下来', '颈部受压']
  },
  {
    id: 'jackknife', nameZh: '折刀式', nameEn: 'Jackknife',
    region: 'core', equip: ['mat'], level: 'advanced',
    primary: '腹直肌、髋屈肌', primaryEn: 'Rectus, Hip Flexors',
    secondary: '臀大肌、脊柱伸肌', secondaryEn: 'Glutes, Spinal Extensors',
    purpose: '核心爆发 + 控制下落', purposeEn: 'Core power + controlled descent',
    cues: {
      simple: [
        { zh: '腿抬到天花板再到头顶，最后控制下来', en: 'Legs to ceiling, overhead, then control down' }
      ],
      imagery: [{ zh: '像把折刀慢慢合起再展开', en: 'Like a jackknife folding and opening' }],
      precise: [{ zh: '全程脊柱节段控制无冲击', en: 'Full segmental control, no impact' }]
    },
    errors: ['冲击颈椎', '靠惯性']
  },
  {
    id: 'corkscrew', nameZh: '螺旋腿', nameEn: 'Corkscrew',
    region: 'core', equip: ['mat'], level: 'intermediate',
    primary: '腹斜肌、腹横肌', primaryEn: 'Obliques, TVA',
    secondary: '腹直肌、髋屈肌', secondaryEn: 'Rectus, Hip Flexors',
    purpose: '抗旋转 + 多平面核心控制', purposeEn: 'Anti-rotation + multi-planar core control',
    cues: {
      simple: [
        { zh: '腿在空中画圈，骨盆稳定', en: 'Legs circle in the air, pelvis still' }
      ],
      imagery: [{ zh: '腿尖在天花板画圆', en: 'Toes draw a circle on the ceiling' }],
      precise: [{ zh: '腹斜肌稳定骨盆，肩胛贴床', en: 'Obliques stabilize pelvis, scaps anchored' }]
    },
    errors: ['骨盆离开床面', '颈部紧张']
  },
  {
    id: 'scissors', nameZh: '剪刀腿', nameEn: 'Scissors',
    region: 'core', equip: ['mat'], level: 'intermediate',
    primary: '腹直肌、髋屈肌', primaryEn: 'Rectus, Hip Flexors',
    secondary: '腘绳肌、内收肌', secondaryEn: 'Hamstrings, Adductors',
    purpose: '反向卷起姿势下的腿部交替', purposeEn: 'Inverted leg alternation',
    cues: {
      simple: [
        { zh: '骨盆托起，腿在空中剪刀状交替', en: 'Pelvis lifted, legs scissor in the air' }
      ],
      imagery: [{ zh: '腿像两把剪刀，从根部发力', en: 'Legs like scissors moving from the hip' }],
      precise: [{ zh: '腹直肌维持反卷姿势，髋屈伸独立', en: 'Rectus maintains inversion, hip flex/ext independent' }]
    },
    errors: ['骨盆掉下来', '颈部紧张']
  },

  // ============================================================
  // SPINE / 脊柱专项 - 6 exercises
  // ============================================================
  {
    id: 'cat-cow', nameZh: '猫牛式', nameEn: 'Cat-Cow',
    region: 'spine', equip: ['mat'], level: 'beginner',
    primary: '脊柱伸肌、屈肌', primaryEn: 'Spinal Extensors, Flexors',
    secondary: '核心、肩稳定肌', secondaryEn: 'Core, Shoulder Stabilizers',
    purpose: '脊柱节段性活动 + 呼吸联结', purposeEn: 'Spinal articulation + breath connection',
    cues: {
      simple: [{ zh: '吸气胸口前推，呼气背部圆起', en: 'Inhale chest forward, exhale round back' }],
      imagery: [{ zh: '脊柱像波浪从尾骨到头顶', en: 'Spine waves from tail to crown' }],
      precise: [{ zh: '从骨盆启动逐节传递至颈椎', en: 'Initiates at pelvis, sequences to cervical' }]
    },
    errors: ['只动头', '只动腰']
  },
  {
    id: 'swan', nameZh: '天鹅式', nameEn: 'Swan',
    region: 'spine', equip: ['mat', 'reformer'], level: 'intermediate',
    primary: '脊柱伸肌、臀大肌', primaryEn: 'Spinal Extensors, Glutes',
    secondary: '后链整体', secondaryEn: 'Posterior Chain',
    purpose: '脊柱伸展，对抗久坐圆背', purposeEn: 'Spinal extension, counter sitting',
    cues: {
      simple: [
        { zh: '胸口先离地不是头', en: 'Chest leads, not head' },
        { zh: '臀部夹紧保护腰椎', en: 'Squeeze glutes to protect lumbar' }
      ],
      imagery: [{ zh: '胸口像花朵向阳光打开', en: 'Chest blooms to the sun' }],
      precise: [{ zh: '胸椎主导伸展，无腰椎过伸', en: 'Thoracic dominant, no lumbar hyperextension' }]
    },
    errors: ['仅靠腰后伸', '颈部过仰']
  },
  {
    id: 'spine-twist', nameZh: '脊柱扭转', nameEn: 'Spine Twist',
    region: 'spine', equip: ['mat'], level: 'beginner',
    primary: '腹斜肌、脊柱旋转肌', primaryEn: 'Obliques, Spinal Rotators',
    secondary: '骨盆底', secondaryEn: 'Pelvic Floor',
    purpose: '胸椎旋转灵活度', purposeEn: 'Thoracic rotation mobility',
    cues: {
      simple: [
        { zh: '坐高从胸口扭转', en: 'Sit tall, rotate from the chest' },
        { zh: '骨盆面朝正前方', en: 'Pelvis faces forward' }
      ],
      imagery: [{ zh: '身体是一根螺丝越拧越长', en: 'Body is a screw — twist longer' }],
      precise: [{ zh: '骨盆稳定，胸椎主导旋转', en: 'Stable pelvis, thoracic-led rotation' }]
    },
    errors: ['骨盆跟转', '坐得驼背']
  },
  {
    id: 'mermaid', nameZh: '美人鱼', nameEn: 'Mermaid',
    region: 'spine', equip: ['mat', 'reformer'], level: 'beginner',
    primary: '腹斜肌、腰方肌', primaryEn: 'Obliques, QL',
    secondary: '背阔肌', secondaryEn: 'Lats',
    purpose: '侧屈延展', purposeEn: 'Lateral flexion',
    cues: {
      simple: [
        { zh: '想象自己长高再倒下去', en: 'Lengthen up first, then tip over' },
        { zh: '两侧坐骨保持着地', en: 'Both sit bones grounded' }
      ],
      imagery: [{ zh: '身体像彩虹长长拱起', en: 'Body arches like a rainbow' }],
      precise: [{ zh: '侧屈伴随脊柱延长', en: 'Lateral flexion with elongation' }]
    },
    errors: ['坐骨翘起', '塌侧腰']
  },
  {
    id: 'saw', nameZh: '锯式', nameEn: 'Saw',
    region: 'spine', equip: ['mat'], level: 'intermediate',
    primary: '腹斜肌、脊柱旋转肌', primaryEn: 'Obliques, Spinal Rotators',
    secondary: '腘绳肌、肩稳定肌', secondaryEn: 'Hamstrings, Shoulder Stabilizers',
    purpose: '坐姿旋转屈曲组合', purposeEn: 'Seated rotation + flexion combination',
    cues: {
      simple: [
        { zh: '先扭转再前屈，小指尖锯过对侧脚趾', en: 'Rotate first, then flex — pinky saws past opposite toe' }
      ],
      imagery: [{ zh: '像把锯子来回穿过身体', en: 'Like a saw cutting through the body' }],
      precise: [{ zh: '骨盆稳定，旋转后才屈曲', en: 'Pelvis stable, rotation precedes flexion' }]
    },
    errors: ['坐骨翘起', '只是手碰脚']
  },
  {
    id: 'breaststroke-prep', nameZh: '蛙泳准备', nameEn: 'Breaststroke Prep',
    region: 'spine', equip: ['mat', 'reformer'], level: 'beginner',
    primary: '胸椎伸肌、中下斜方', primaryEn: 'Thoracic Extensors, Mid/Lower Trap',
    secondary: '臀大肌、深层颈屈肌', secondaryEn: 'Glutes, Deep Cervical Flexors',
    purpose: '俯卧位胸椎伸展', purposeEn: 'Prone thoracic extension',
    cues: {
      simple: [
        { zh: '俯卧，手臂滑出去，胸口微抬', en: 'Prone, arms slide out, chest lifts slightly' }
      ],
      imagery: [{ zh: '想象手臂像翅膀在水中划开', en: 'Arms part the water like wings' }],
      precise: [{ zh: '中下斜方启动，避免腰椎代偿', en: 'Mid/lower trap engages, no lumbar compensation' }]
    },
    errors: ['塌腰', '颈部前伸']
  },

  // ============================================================
  // LOWER BODY / 下肢 - 8 exercises (mat & small props)
  // ============================================================
  {
    id: 'bridge', nameZh: '臀桥', nameEn: 'Pelvic Bridge',
    region: 'lower', equip: ['mat', 'ring', 'ball'], level: 'beginner',
    primary: '臀大肌、腘绳肌', primaryEn: 'Glute Max, Hamstrings',
    secondary: '腹横肌、骨盆底', secondaryEn: 'TVA, Pelvic Floor',
    purpose: '激活臀肌，改善骨盆前倾', purposeEn: 'Glute activation, address APT',
    cues: {
      simple: [
        { zh: '尾骨先离开垫子，一节一节卷起', en: 'Tailbone lifts first, peel up' },
        { zh: '夹紧臀部不靠腰', en: 'Squeeze glutes, not lower back' }
      ],
      imagery: [{ zh: '骨盆是碗慢慢端平再托起', en: 'Pelvis is a bowl — level it, then lift' }],
      precise: [{ zh: 'PPT 启动，臀大肌主导', en: 'PPT initiation, glute max leads' }]
    },
    errors: ['腰部代偿', '膝盖外八']
  },
  {
    id: 'single-leg-bridge', nameZh: '单腿臀桥', nameEn: 'Single Leg Bridge',
    region: 'lower', equip: ['mat'], level: 'intermediate',
    primary: '臀大肌、臀中肌', primaryEn: 'Glute Max, Medius',
    secondary: '腘绳肌、核心', secondaryEn: 'Hamstrings, Core',
    purpose: '单侧臀部力量、抗骨盆掉落', purposeEn: 'Unilateral glute strength',
    cues: {
      simple: [{ zh: '骨盆保持水平不要一边掉', en: 'Pelvis level, no dropping' }],
      imagery: [{ zh: '骨盆上放一杯水不能洒', en: 'Cup on pelvis — don\'t spill' }],
      precise: [{ zh: '臀中肌防对侧骨盆下掉', en: 'Glute medius prevents drop' }]
    },
    errors: ['骨盆侧倾', '靠手臂顶']
  },
  {
    id: 'clam-shell', nameZh: '蚌式开合', nameEn: 'Clam Shell',
    region: 'lower', equip: ['mat', 'band'], level: 'beginner',
    primary: '臀中肌、臀小肌', primaryEn: 'Glute Medius, Minimus',
    secondary: '深层髋外旋肌', secondaryEn: 'Deep Hip External Rotators',
    purpose: '激活臀中肌，改善膝内扣', purposeEn: 'Activate glute medius, address knee valgus',
    cues: {
      simple: [
        { zh: '脚跟并拢膝盖打开骨盆不动', en: 'Heels together, knees apart, still pelvis' },
        { zh: '感觉屁股侧面在用力', en: 'Feel the side of glute working' }
      ],
      imagery: [{ zh: '骨盆像贝壳缓慢张开', en: 'Pelvis is a clam opening' }],
      precise: [{ zh: '臀中肌后束启动，骨盆矢状面稳定', en: 'Posterior glute medius engages' }]
    },
    errors: ['骨盆后倒', '幅度过大']
  },
  {
    id: 'squat', nameZh: '深蹲', nameEn: 'Squat',
    region: 'lower', equip: ['mat', 'ball'], level: 'beginner',
    primary: '股四头肌、臀大肌', primaryEn: 'Quadriceps, Glute Max',
    secondary: '腘绳肌、核心', secondaryEn: 'Hamstrings, Core',
    purpose: '下肢综合力量', purposeEn: 'Lower body strength',
    cues: {
      simple: [
        { zh: '像坐在身后的椅子上', en: 'Sit back into an imaginary chair' },
        { zh: '膝盖跟着脚尖方向', en: 'Knees track over toes' }
      ],
      imagery: [{ zh: '尾骨像狗尾巴往后翘', en: 'Tail reaches back like a dog\'s tail' }],
      precise: [{ zh: '髋屈先启动，足弓主动', en: 'Hip flex first, active arches' }]
    },
    errors: ['膝盖内扣', '后跟离地']
  },
  {
    id: 'lunge', nameZh: '弓步', nameEn: 'Lunge',
    region: 'lower', equip: ['mat', 'reformer'], level: 'intermediate',
    primary: '股四头肌、臀大肌', primaryEn: 'Quadriceps, Glutes',
    secondary: '腘绳肌、核心稳定肌', secondaryEn: 'Hamstrings, Core Stabilizers',
    purpose: '单侧下肢力量+平衡', purposeEn: 'Unilateral leg strength + balance',
    cues: {
      simple: [
        { zh: '前膝在脚踝正上方', en: 'Front knee over ankle' },
        { zh: '上身竖直不前倾', en: 'Torso upright' }
      ],
      imagery: [{ zh: '电梯垂直下降', en: 'Elevator going straight down' }],
      precise: [{ zh: '后腿髋屈伸展，前腿髋伸承重', en: 'Back hip flexor lengthens, front hip ext loads' }]
    },
    errors: ['前膝超脚尖', '上身前倾']
  },
  {
    id: 'side-leg-lift', nameZh: '侧躺抬腿', nameEn: 'Side Leg Lifts',
    region: 'lower', equip: ['mat', 'band'], level: 'beginner',
    primary: '臀中肌', primaryEn: 'Glute Medius',
    secondary: '臀小肌、腰方肌', secondaryEn: 'Glute Min, QL',
    purpose: '臀中肌孤立训练', purposeEn: 'Isolate glute medius',
    cues: {
      simple: [{ zh: '腿稍微往后一点点抬，不要往前', en: 'Leg lifts slightly behind midline' }],
      imagery: [{ zh: '腿像扇叶安静划过空气', en: 'Leg slices air like a fan blade' }],
      precise: [{ zh: '髋外展配合轻微外旋', en: 'Abduction with slight external rotation' }]
    },
    errors: ['骨盆后倾', '阔筋膜张肌主导']
  },
  {
    id: 'standing-balance', nameZh: '单腿平衡', nameEn: 'Standing Balance',
    region: 'full', equip: ['mat'], level: 'beginner',
    primary: '臀中肌、足底', primaryEn: 'Glute Medius, Foot Intrinsics',
    secondary: '核心、深层稳定肌', secondaryEn: 'Core, Deep Stabilizers',
    purpose: '本体感受、抗摔倒', purposeEn: 'Proprioception',
    cues: {
      simple: [{ zh: '把脚掌想象成三脚架', en: 'Foot is a tripod' }],
      imagery: [{ zh: '像一棵树根扎深', en: 'Like a tree — roots deep' }],
      precise: [{ zh: '足底固有肌+髋稳定肌共同维持', en: 'Foot intrinsics + hip stabilizers' }]
    },
    errors: ['憋气', '骨盆下掉']
  },
  {
    id: 'inner-thigh-circles', nameZh: '内收肌画圈', nameEn: 'Inner Thigh Circles',
    region: 'lower', equip: ['mat', 'ring'], level: 'beginner',
    primary: '内收肌', primaryEn: 'Adductors',
    secondary: '骨盆底、核心', secondaryEn: 'Pelvic Floor, Core',
    purpose: '激活大腿内侧 + 骨盆底联结', purposeEn: 'Adductor activation + pelvic floor connection',
    cues: {
      simple: [
        { zh: '侧躺，下面那条腿小幅画圈', en: 'Side-lying, bottom leg circles small' }
      ],
      imagery: [{ zh: '脚跟像画硬币大小的圆', en: 'Heel draws coin-sized circles' }],
      precise: [{ zh: '内收肌主导，骨盆稳定', en: 'Adductors lead, pelvis stable' }]
    },
    errors: ['骨盆前倒', '幅度过大']
  },

  // ============================================================
  // UPPER BODY / 上肢 (mat & small props) - 4 exercises
  // ============================================================
  {
    id: 'arm-circles', nameZh: '手臂画圈', nameEn: 'Arm Circles',
    region: 'upper', equip: ['mat', 'band'], level: 'beginner',
    primary: '三角肌、肩袖', primaryEn: 'Deltoids, Rotator Cuff',
    secondary: '前锯肌、菱形肌', secondaryEn: 'Serratus, Rhomboids',
    purpose: '肩关节活动度', purposeEn: 'Shoulder mobility',
    cues: {
      simple: [
        { zh: '画大圈不耸肩', en: 'Big circles, no shrugging' }
      ],
      imagery: [{ zh: '指尖在墙上画完美的圆', en: 'Fingertips paint a perfect circle' }],
      precise: [{ zh: '肩胛骨保持下沉', en: 'Scapulae depressed' }]
    },
    errors: ['圆耸肩', '只用小臂画']
  },
  {
    id: 'chest-expansion', nameZh: '胸腔扩张', nameEn: 'Chest Expansion',
    region: 'upper', equip: ['mat', 'band'], level: 'beginner',
    primary: '背阔肌、菱形肌', primaryEn: 'Lats, Rhomboids',
    secondary: '后三角肌、中下斜方', secondaryEn: 'Posterior Deltoid, Mid/Lower Trap',
    purpose: '改善圆肩驼背', purposeEn: 'Counter rounded shoulders',
    cues: {
      simple: [
        { zh: '手臂往身体后方拉胸口打开', en: 'Pull arms behind, open chest' }
      ],
      imagery: [
        { zh: '后背夹住一支铅笔', en: 'Squeeze a pencil between blades' },
        { zh: '心口像一朵慢慢盛开的花', en: 'Heart blooms like a flower' }
      ],
      precise: [{ zh: '激活下斜方与背阔，避免上斜方代偿', en: 'Lower trap + lats, no upper trap dominance' }]
    },
    errors: ['耸肩代偿', '腰椎过度前凸']
  },
  {
    id: 'push-up', nameZh: '俯卧撑', nameEn: 'Push-Up',
    region: 'upper', equip: ['mat', 'reformer'], level: 'intermediate',
    primary: '胸大肌、三头肌', primaryEn: 'Pectorals, Triceps',
    secondary: '前三角肌、核心', secondaryEn: 'Anterior Deltoid, Core',
    purpose: '上肢力量+核心稳定', purposeEn: 'Upper body strength + core',
    cues: {
      simple: [
        { zh: '手肘贴近身体', en: 'Elbows close to ribs' },
        { zh: '胸口先碰地', en: 'Chest leads down' }
      ],
      imagery: [{ zh: '把地板推开像推一艘船', en: 'Push the floor like pushing a boat' }],
      precise: [{ zh: '前锯肌维持肩胛贴附', en: 'Serratus keeps scaps anchored' }]
    },
    errors: ['手肘外翻', '腰部下塌']
  },
  {
    id: 'tricep-dip', nameZh: '三头肌下沉', nameEn: 'Tricep Dips',
    region: 'upper', equip: ['mat', 'chair'], level: 'beginner',
    primary: '三头肌', primaryEn: 'Triceps',
    secondary: '前三角肌、胸大肌', secondaryEn: 'Anterior Deltoid, Pectorals',
    purpose: '后臂塑形', purposeEn: 'Tone back of arms',
    cues: {
      simple: [{ zh: '手肘向后弯不要外翻', en: 'Elbows bend back, not out' }],
      imagery: [{ zh: '臀部贴墙下滑', en: 'Hips slide down a wall' }],
      precise: [{ zh: '肩胛下沉，肘屈伸在矢状面', en: 'Scaps depressed, sagittal-plane elbow flexion' }]
    },
    errors: ['肩膀耸起', '手肘外翻']
  },

  // ============================================================
  // FULL BODY / 全身热身收操 - 4 exercises
  // ============================================================
  {
    id: 'roll-down', nameZh: '站姿卷下', nameEn: 'Standing Roll Down',
    region: 'full', equip: ['mat'], level: 'beginner',
    primary: '脊柱屈肌、腘绳肌', primaryEn: 'Spinal Flexors, Hamstrings',
    secondary: '核心、足底', secondaryEn: 'Core, Foot Intrinsics',
    purpose: '热身，建立呼吸联结', purposeEn: 'Warm-up, breath-spine connection',
    cues: {
      simple: [{ zh: '低头再一节一节往下卷', en: 'Drop head, then roll down vertebrae' }],
      imagery: [{ zh: '把项链慢慢挂下来', en: 'Lower a string of beads' }],
      precise: [{ zh: '颈胸腰段依次屈曲', en: 'Sequential C→T→L flexion' }]
    },
    errors: ['膝盖锁死', '腰塌']
  },
  {
    id: 'pelvic-clock', nameZh: '骨盆时钟', nameEn: 'Pelvic Clock',
    region: 'core', equip: ['mat'], level: 'beginner',
    primary: '腹横肌、骨盆底', primaryEn: 'TVA, Pelvic Floor',
    secondary: '深层多裂肌', secondaryEn: 'Deep Multifidus',
    purpose: '骨盆控制基础、深层核心激活', purposeEn: 'Pelvic control, deep core activation',
    cues: {
      simple: [
        { zh: '骨盆是个钟，慢慢从 12 点走到 6 点', en: 'Pelvis is a clock — 12 to 6' }
      ],
      imagery: [{ zh: '想象骨盆里有一颗弹珠在画圈', en: 'A marble rolls around inside the pelvis' }],
      precise: [{ zh: '脊柱微小屈伸，识别骨盆中立位', en: 'Micro flex/ext, find neutral pelvis' }]
    },
    errors: ['用大动作代替微动作', '憋气']
  },
  {
    id: 'breathing-prone', nameZh: '俯卧呼吸', nameEn: 'Prone Breathing',
    region: 'full', equip: ['mat'], level: 'beginner',
    primary: '膈肌、深层核心', primaryEn: 'Diaphragm, Deep Core',
    secondary: '骨盆底、腹横肌', secondaryEn: 'Pelvic Floor, TVA',
    purpose: '建立 360° 呼吸', purposeEn: 'Establish 360° breathing',
    cues: {
      simple: [
        { zh: '俯卧，把呼吸送到下腰背', en: 'Prone, send breath to the lower back' }
      ],
      imagery: [{ zh: '下背部像气球缓慢膨胀', en: 'Lower back inflates like a balloon' }],
      precise: [{ zh: '膈肌主导吸气，避免胸式代偿', en: 'Diaphragmatic inhale, no chest compensation' }]
    },
    errors: ['只是胸式呼吸', '憋气']
  },
  {
    id: 'standing-stretch', nameZh: '站姿延展', nameEn: 'Standing Full Body Stretch',
    region: 'full', equip: ['mat'], level: 'beginner',
    primary: '全身链', primaryEn: 'Full Body Chain',
    secondary: '呼吸系统', secondaryEn: 'Respiratory',
    purpose: '收操放松', purposeEn: 'Cool-down release',
    cues: {
      simple: [{ zh: '吸气手臂上举，呼气往下沉', en: 'Inhale arms up, exhale down' }],
      imagery: [{ zh: '像一棵树被风拉伸', en: 'Tree stretched by the wind' }],
      precise: [{ zh: '全身肌肉等长延展', en: 'Full body isometric lengthening' }]
    },
    errors: ['耸肩', '憋气']
  }
];

// ============================================================
// POSTURE PROTOCOLS (unchanged from previous version)
// ============================================================
const POSTURES = [
  {
    id: 'kyphosis',
    nameZh: '圆肩驼背 / 上交叉综合征', nameEn: 'Rounded Shoulders / Upper-Crossed',
    summary: '长期久坐、低头看屏幕导致胸椎屈曲、肩前引、头前伸的复合体态',
    summaryEn: 'Combined posture from prolonged sitting and screen use',
    focus: '强化后链，松解前链',
    focusEn: 'Strengthen posterior, release anterior',
    strengthen: [
      { zh: '中下斜方肌（菱形肌）', en: 'Mid/Lower Trapezius & Rhomboids' },
      { zh: '深层颈屈肌', en: 'Deep Cervical Flexors' },
      { zh: '胸椎伸肌', en: 'Thoracic Extensors' },
      { zh: '前锯肌', en: 'Serratus Anterior' }
    ],
    release: [
      { zh: '胸大肌、胸小肌', en: 'Pectoralis Major & Minor' },
      { zh: '上斜方肌、肩胛提肌', en: 'Upper Trapezius, Levator Scapulae' },
      { zh: '枕骨下肌群', en: 'Suboccipitals' }
    ],
    recommendedIds: ['chest-expansion-reformer', 'swan', 'breaststroke-prep', 'arm-circles', 'cat-cow', 'mermaid-reformer', 'spine-twist', 'serratus-punch'],
    notes: '课堂中尽量加入俯卧后伸展和站姿扩胸；避免持续屈曲性动作（如太多卷腹）。建议每节课开胸 ≥ 5 分钟。',
    notesEn: 'Include prone extension and standing chest opening; avoid excessive flexion-dominant work.'
  },
  {
    id: 'apt',
    nameZh: '骨盆前倾 / 下交叉综合征', nameEn: 'Anterior Pelvic Tilt / Lower-Crossed',
    summary: '腰椎曲度过大、小腹前凸，常伴腰痛与久坐者',
    summaryEn: 'Excessive lumbar curve, protruding belly',
    focus: '强化臀腹，松解髋前与腰',
    focusEn: 'Strengthen glutes & abs, release hip flexors & lumbar',
    strengthen: [
      { zh: '臀大肌', en: 'Gluteus Maximus' },
      { zh: '腹横肌、腹直肌', en: 'TVA, Rectus Abdominis' },
      { zh: '腘绳肌', en: 'Hamstrings' }
    ],
    release: [
      { zh: '髂腰肌', en: 'Iliopsoas' },
      { zh: '股直肌', en: 'Rectus Femoris' },
      { zh: '腰部竖脊肌', en: 'Lumbar Erector Spinae' }
    ],
    recommendedIds: ['bridge', 'reformer-bridge', 'single-leg-bridge', 'roll-up', 'plank', 'cat-cow', 'hundred', 'pelvic-clock'],
    notes: '骨盆中立位的教学是这类学员的核心。所有臀桥与腹部练习，先教骨盆后倾的启动顺序。',
    notesEn: 'Teaching neutral pelvis is paramount.'
  },
  {
    id: 'scoliosis',
    nameZh: '脊柱侧弯', nameEn: 'Scoliosis',
    summary: '脊柱在冠状面的非生理性侧向弯曲，常伴旋转',
    summaryEn: 'Non-physiological lateral curvature with rotation',
    focus: '不对称训练，加强凹侧、延展凸侧',
    focusEn: 'Asymmetric training: strengthen concave side, lengthen convex side',
    strengthen: [
      { zh: '凹侧腰方肌、腹斜肌', en: 'Concave-side QL & Obliques' },
      { zh: '深层多裂肌', en: 'Deep Multifidus' },
      { zh: '骨盆底与核心', en: 'Pelvic Floor & Core' }
    ],
    release: [
      { zh: '凸侧紧张肌群', en: 'Convex-side tight muscles' },
      { zh: '胸廓周围筋膜', en: 'Thoracic fascia' }
    ],
    recommendedIds: ['side-plank', 'mermaid', 'mermaid-reformer', 'spine-twist', 'cat-cow', 'side-lying-leg-press'],
    notes: '务必先了解学员侧弯类型（C型/S型，凸向哪侧）。Mermaid 不要两边平均做——凸侧少做或不做，凹侧加强。',
    notesEn: 'Assess curve type first. Don\'t do Mermaid evenly.'
  },
  {
    id: 'flatfoot',
    nameZh: '扁平足 / X或O型腿', nameEn: 'Flat Foot / Knee Valgus or Varus',
    summary: '足弓塌陷与膝关节力线异常，影响整个下肢链',
    summaryEn: 'Collapsed arches and knee alignment issues',
    focus: '激活足底固有肌、臀中肌',
    focusEn: 'Activate foot intrinsics and glute medius',
    strengthen: [
      { zh: '足底固有肌、胫骨后肌', en: 'Foot Intrinsics, Tibialis Posterior' },
      { zh: '臀中肌、臀大肌', en: 'Glute Medius & Maximus' },
      { zh: '深层髋外旋肌', en: 'Deep Hip External Rotators' }
    ],
    release: [
      { zh: '腓骨肌（X型腿）', en: 'Peroneals (for valgus)' },
      { zh: '阔筋膜张肌、髂胫束', en: 'TFL & IT Band' },
      { zh: '小腿三头肌', en: 'Triceps Surae' }
    ],
    recommendedIds: ['clam-shell', 'side-leg-lift', 'standing-balance', 'squat', 'bridge', 'footwork-arches', 'footwork-tendon-stretch'],
    notes: '深蹲必须严格教膝盖追脚尖。先做大量蚌式、侧抬腿激活臀中肌。Reformer footwork 各种位置都做。',
    notesEn: 'Cue knee tracking strictly. Begin with abundant clam shells.'
  },
  {
    id: 'postpartum',
    nameZh: '产后核心松弛 / 腹直肌分离', nameEn: 'Postpartum / Diastasis Recti',
    summary: '产后腹白线松弛、腹直肌分离，常伴骨盆底功能下降',
    summaryEn: 'Postpartum linea alba laxity, with pelvic floor dysfunction',
    focus: '由内向外重建：呼吸 → 骨盆底 → 腹横肌 → 整体核心',
    focusEn: 'Rebuild inside-out',
    strengthen: [
      { zh: '腹横肌（深层）', en: 'TVA (deep)' },
      { zh: '骨盆底肌', en: 'Pelvic Floor' },
      { zh: '臀大肌', en: 'Glute Max' },
      { zh: '多裂肌', en: 'Multifidus' }
    ],
    release: [
      { zh: '上腹部紧张筋膜', en: 'Upper abdominal tightness' },
      { zh: '髂腰肌（产后常紧）', en: 'Iliopsoas (often tight)' }
    ],
    recommendedIds: ['breathing-prone', 'pelvic-clock', 'bridge', 'cat-cow', 'clam-shell', 'standing-balance', 'inner-thigh-circles'],
    notes: '⚠️ 产后 6 个月内（特别是分离 ≥ 2 指）严禁卷腹、平板、Hundred 这类高腹压动作。先做 4-6 周呼吸 + 骨盆底激活。',
    notesEn: '⚠️ Within 6 months postpartum, AVOID crunches, plank, Hundred.',
    warning: true
  },
  {
    id: 'forward-head',
    nameZh: '颈前引 / 头前伸', nameEn: 'Forward Head Posture',
    summary: '头部重心位于身体中线之前，常与圆肩驼背并存',
    summaryEn: 'Head center of gravity in front of body midline',
    focus: '激活深层颈屈肌，松解枕骨下与上斜方',
    focusEn: 'Activate deep cervical flexors, release suboccipitals',
    strengthen: [
      { zh: '深层颈屈肌', en: 'Deep Cervical Flexors' },
      { zh: '中下斜方肌', en: 'Mid/Lower Trapezius' },
      { zh: '胸椎伸肌', en: 'Thoracic Extensors' }
    ],
    release: [
      { zh: '枕骨下肌群', en: 'Suboccipitals' },
      { zh: '胸锁乳突肌', en: 'Sternocleidomastoid' },
      { zh: '上斜方肌', en: 'Upper Trapezius' }
    ],
    recommendedIds: ['chest-expansion-reformer', 'swan', 'cat-cow', 'arm-circles', 'roll-down', 'breaststroke-prep'],
    notes: '所有动作中加"下巴轻收"（chin nod）的口令。避免长时间仰卧位做大幅度颈部屈曲。',
    notesEn: 'Add "chin nod" cue across all exercises.'
  }
];

// ============================================================
// STATE
// ============================================================
let currentLang = 'both';
let currentRegion = 'all';
let currentEquip = 'all';
let currentSearch = '';
let currentCueStyle = 'simple';
let currentLesson = { warmup: [], main: [], cooldown: [] };
let pickerTargetStage = null;

// ============================================================
// HELPERS
// ============================================================
function regionLabel(r) {
  return { upper: '上肢', core: '核心', lower: '下肢', spine: '脊柱', full: '全身' }[r] || r;
}
function equipLabel(e) {
  return { mat: '垫', reformer: '床', chair: '椅', cadillac: '梯桶', ring: '圈', ball: '球', band: '弹力带' }[e] || e;
}
function levelLabel(l) {
  return { beginner: '初', intermediate: '中', advanced: '高' }[l] || l;
}

const VIEW_TITLES = {
  library: '动作库',
  posture: '体态方案',
  builder: '备课台',
  saved: '我的课表'
};

// Image URL helper - returns image URL if available, else null
function getImageUrl(exId) {
  // Image is expected at images/{id}.jpg in the repo
  // Returns relative path; the loader will check if it exists
  return `images/${exId}.jpg`;
}

// ============================================================
// EXERCISE LIST
// ============================================================
function renderExerciseList() {
  const list = document.getElementById('exercise-list');
  const filtered = EXERCISES.filter(ex => {
    const regionMatch = currentRegion === 'all' || ex.region === currentRegion;
    const equipMatch = currentEquip === 'all' || ex.equip.includes(currentEquip);
    const search = currentSearch.toLowerCase();
    const searchMatch = !search ||
      ex.nameZh.includes(search) ||
      ex.nameEn.toLowerCase().includes(search) ||
      ex.primary.includes(search) ||
      ex.primaryEn.toLowerCase().includes(search);
    return regionMatch && equipMatch && searchMatch;
  });

  document.getElementById('library-sub').textContent = `${filtered.length} 个动作 · exercises`;

  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty"><h3>没找到</h3><p>试试别的搜索词或筛选</p></div>`;
    return;
  }

  const showZh = currentLang !== 'en';
  const showEn = currentLang !== 'zh';

  list.innerHTML = filtered.map(ex => `
    <div class="exercise-card" data-id="${ex.id}">
      <div class="card-row">
        <div class="card-thumb" data-id="${ex.id}">
          <img src="${getImageUrl(ex.id)}" alt="" loading="lazy" onerror="this.parentElement.classList.add('no-image')">
          <div class="thumb-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <circle cx="12" cy="8" r="3"/>
              <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>
            </svg>
          </div>
        </div>
        <div class="card-info">
          <div class="card-tags">
            <span class="tag">${regionLabel(ex.region)}</span>
            ${ex.equip.slice(0,2).map(e => `<span class="tag equip">${equipLabel(e)}</span>`).join('')}
            <span class="tag level">${levelLabel(ex.level)}</span>
          </div>
          ${showZh ? `<div class="card-name-zh">${ex.nameZh}</div>` : ''}
          ${showEn ? `<div class="card-name-en">${ex.nameEn}</div>` : ''}
          <div class="card-target">
            <strong>主：</strong>${showZh ? ex.primary : ex.primaryEn}
          </div>
        </div>
        <div class="card-arrow">›</div>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.exercise-card').forEach(card => {
    card.addEventListener('click', () => openSheet(card.dataset.id));
  });
}

// ============================================================
// BOTTOM SHEET (Detail)
// ============================================================
function openSheet(id) {
  const ex = EXERCISES.find(e => e.id === id);
  if (!ex) return;
  const showZh = currentLang !== 'en';
  const showEn = currentLang !== 'zh';

  const content = document.getElementById('sheet-content');
  content.innerHTML = `
    <div class="sheet-image" data-id="${ex.id}">
      <img src="${getImageUrl(ex.id)}" alt="" onerror="this.parentElement.classList.add('no-image')">
      <div class="sheet-image-placeholder">
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="32" cy="22" r="8"/>
          <path d="M14 56v-4a10 10 0 0 1 10-10h16a10 10 0 0 1 10 10v4"/>
        </svg>
        <div class="placeholder-hint">尚未上传图片</div>
      </div>
    </div>

    ${showZh ? `<div class="sheet-name-zh">${ex.nameZh}</div>` : ''}
    ${showEn ? `<div class="sheet-name-en">${ex.nameEn}</div>` : ''}

    <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-bottom:1rem;">
      ${ex.equip.map(e => `<span class="tag equip">${equipLabel(e)}</span>`).join('')}
      <span class="tag level">${levelLabel(ex.level)}级</span>
      <span class="tag">${regionLabel(ex.region)}</span>
    </div>

    <div class="sheet-section">
      <div class="section-label">目标肌群 · target muscles</div>
      <div class="target-grid">
        <div class="target-block">
          <div class="label">主 · primary</div>
          <div class="value">
            ${showZh ? ex.primary : ''}
            ${showZh && showEn ? '<em>' + ex.primaryEn + '</em>' : (showEn ? ex.primaryEn : '')}
          </div>
        </div>
        <div class="target-block">
          <div class="label">协 · secondary</div>
          <div class="value">
            ${showZh ? ex.secondary : ''}
            ${showZh && showEn ? '<em>' + ex.secondaryEn + '</em>' : (showEn ? ex.secondaryEn : '')}
          </div>
        </div>
      </div>
      <div class="purpose-block">
        ${showZh ? '🎯 ' + ex.purpose : ''}${showZh && showEn ? ' · ' : ''}${showEn ? '<span style="font-style:italic; font-family:Fraunces;">' + ex.purposeEn + '</span>' : ''}
      </div>
    </div>

    <div class="sheet-section">
      <div class="section-label">教学口令 · cues</div>
      <div class="cue-tabs">
        <button class="cue-tab ${currentCueStyle==='simple'?'active':''}" data-style="simple">简洁</button>
        <button class="cue-tab ${currentCueStyle==='imagery'?'active':''}" data-style="imagery">意象</button>
        <button class="cue-tab ${currentCueStyle==='precise'?'active':''}" data-style="precise">解剖</button>
      </div>
      <div class="cue-content" id="cue-content">
        ${renderCues(ex, currentCueStyle, showZh, showEn)}
      </div>
    </div>

    <div class="sheet-section">
      <div class="section-label">常见错误 · errors</div>
      <ul class="common-errors">
        ${ex.errors.map(err => `<li>${err}</li>`).join('')}
      </ul>
    </div>

    <div class="sheet-actions">
      <button class="btn btn-primary" onclick="addToBuilderFromSheet('${ex.id}')">加入备课台</button>
      <button class="btn btn-secondary" onclick="closeSheet()">关闭</button>
    </div>
  `;

  // Wire cue tabs
  content.querySelectorAll('.cue-tab').forEach(t => {
    t.addEventListener('click', () => {
      currentCueStyle = t.dataset.style;
      content.querySelectorAll('.cue-tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      document.getElementById('cue-content').innerHTML = renderCues(ex, currentCueStyle, showZh, showEn);
    });
  });

  document.getElementById('sheet').classList.add('active');
  document.getElementById('sheet-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderCues(ex, style, showZh, showEn) {
  const cues = ex.cues[style] || [];
  if (cues.length === 0) return '<div style="color:var(--ink-mute); font-style:italic;">暂未提供此风格</div>';
  return cues.map(c => `
    <div class="cue-line">
      ${showZh ? `<div class="cue-zh">「${c.zh}」</div>` : ''}
      ${showEn ? `<div class="cue-en">"${c.en}"</div>` : ''}
    </div>
  `).join('');
}

function closeSheet() {
  document.getElementById('sheet').classList.remove('active');
  document.getElementById('sheet-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('sheet-overlay').addEventListener('click', closeSheet);

// Swipe down to close sheet
let sheetTouchStartY = 0;
let sheetCurrentTranslate = 0;
const sheet = document.getElementById('sheet');
sheet.addEventListener('touchstart', (e) => {
  if (sheet.scrollTop > 0) return;
  sheetTouchStartY = e.touches[0].clientY;
  sheet.style.transition = 'none';
});
sheet.addEventListener('touchmove', (e) => {
  if (sheet.scrollTop > 0) return;
  const delta = e.touches[0].clientY - sheetTouchStartY;
  if (delta > 0) {
    sheetCurrentTranslate = delta;
    sheet.style.transform = `translateY(${delta}px)`;
  }
});
sheet.addEventListener('touchend', () => {
  sheet.style.transition = '';
  if (sheetCurrentTranslate > 100) {
    closeSheet();
  } else {
    sheet.style.transform = '';
  }
  sheetCurrentTranslate = 0;
});

// ============================================================
// FILTERS
// ============================================================
document.querySelectorAll('[data-filter="region"]').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('[data-filter="region"]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    currentRegion = b.dataset.value;
    renderExerciseList();
  });
});
document.querySelectorAll('[data-filter="equip"]').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('[data-filter="equip"]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    currentEquip = b.dataset.value;
    renderExerciseList();
  });
});

document.getElementById('search-input').addEventListener('input', e => {
  currentSearch = e.target.value;
  renderExerciseList();
});

// ============================================================
// LANGUAGE
// ============================================================
document.querySelectorAll('.lang-pill button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.lang-pill button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    currentLang = b.dataset.lang;
    renderExerciseList();
    renderPostureList();
    renderLessonStages();
  });
});

// ============================================================
// TABS
// ============================================================
document.querySelectorAll('.tab').forEach(b => {
  b.addEventListener('click', () => {
    const view = b.dataset.view;
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.view').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('view-' + view).classList.add('active');
    document.getElementById('topbar-title').textContent = VIEW_TITLES[view];
    if (view === 'saved') renderSavedLessons();
    if (view === 'posture') renderPostureList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ============================================================
// POSTURE
// ============================================================
function renderPostureList() {
  const list = document.getElementById('posture-list');
  const showZh = currentLang !== 'en';
  const showEn = currentLang !== 'zh';
  list.innerHTML = POSTURES.map((p, i) => `
    <div class="posture-card" data-id="${p.id}">
      <div class="posture-num">0${i+1}</div>
      ${showZh ? `<div class="posture-name-zh">${p.nameZh}</div>` : ''}
      ${showEn ? `<div class="posture-name-en">${p.nameEn}</div>` : ''}
      <div class="posture-summary">${showZh ? p.summary : p.summaryEn}</div>
      <div class="posture-focus">→ ${showZh ? p.focus : p.focusEn}</div>
    </div>
  `).join('');

  list.querySelectorAll('.posture-card').forEach(c => {
    c.addEventListener('click', () => openPostureSheet(c.dataset.id));
  });
}

function openPostureSheet(id) {
  const p = POSTURES.find(x => x.id === id);
  if (!p) return;
  const showZh = currentLang !== 'en';
  const showEn = currentLang !== 'zh';

  const recommendedExercises = p.recommendedIds
    .map(id => EXERCISES.find(e => e.id === id))
    .filter(Boolean);

  const content = document.getElementById('sheet-content');
  content.innerHTML = `
    ${showZh ? `<div class="sheet-name-zh">${p.nameZh}</div>` : ''}
    ${showEn ? `<div class="sheet-name-en">${p.nameEn}</div>` : ''}
    <p style="font-size:0.88rem; color:var(--ink-soft); line-height:1.55; margin: 0.6rem 0 1rem;">${showZh ? p.summary : p.summaryEn}</p>

    <div class="focus-block">
      <h4>训练重点 · focus</h4>
      <p>${showZh ? p.focus : p.focusEn}</p>
    </div>

    <div class="priority-list">
      <div class="priority-card strengthen">
        <h4>🟢 加强 · strengthen</h4>
        <ul>
          ${p.strengthen.map(s => `<li>${showZh ? s.zh : ''}${showZh && showEn ? ' ' : ''}${showEn ? '<em>' + s.en + '</em>' : ''}</li>`).join('')}
        </ul>
      </div>
      <div class="priority-card release">
        <h4>🟠 松解 · release</h4>
        <ul>
          ${p.release.map(r => `<li>${showZh ? r.zh : ''}${showZh && showEn ? ' ' : ''}${showEn ? '<em>' + r.en + '</em>' : ''}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="sheet-section">
      <div class="section-label">推荐动作 · recommended</div>
      <div class="rec-pills">
        ${recommendedExercises.map(ex => `
          <div class="rec-pill" onclick="closeSheetThenOpen('${ex.id}')">
            ${ex.nameZh}
            <span class="en">${ex.nameEn}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="focus-block ${p.warning ? 'warning' : ''}">
      <h4>📌 教学注意 · notes</h4>
      <p>${showZh ? p.notes : p.notesEn}</p>
    </div>

    <div class="sheet-actions">
      <button class="btn btn-primary" onclick="closeSheet()">明白了</button>
    </div>
  `;

  document.getElementById('sheet').classList.add('active');
  document.getElementById('sheet-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.closeSheetThenOpen = function(id) {
  closeSheet();
  setTimeout(() => openSheet(id), 300);
};

// ============================================================
// BUILDER
// ============================================================
function getDefaultReps(stage) {
  return stage === 'warmup' ? '8x' : stage === 'cooldown' ? '30秒' : '10x';
}

function renderLessonStages() {
  const showZh = currentLang !== 'en';
  const showEn = currentLang !== 'zh';

  ['warmup', 'main', 'cooldown'].forEach(stage => {
    const list = document.querySelector(`[data-list="${stage}"]`);
    const items = currentLesson[stage];
    if (items.length === 0) {
      list.innerHTML = '';
      return;
    }
    list.innerHTML = items.map((item, i) => {
      const ex = EXERCISES.find(e => e.id === item.id);
      if (!ex) return '';
      return `
        <div class="planned-item">
          <div class="name">
            ${showZh ? `<div class="zh">${ex.nameZh}</div>` : ''}
            ${showEn ? `<div class="en">${ex.nameEn}</div>` : ''}
          </div>
          <input class="reps" type="text" value="${item.reps}" data-stage="${stage}" data-idx="${i}" placeholder="次数" inputmode="text">
          <button class="remove" data-stage="${stage}" data-idx="${i}">✕</button>
        </div>
      `;
    }).join('');
  });

  document.querySelectorAll('.stage').forEach(s => {
    const stage = s.dataset.stage;
    const count = currentLesson[stage].length;
    const baseTime = stage === 'warmup' ? 8 : stage === 'main' ? 40 : 7;
    s.querySelector('.stage-count').textContent = `${count} 个 · ~${baseTime}min`;
  });

  document.querySelectorAll('.planned-item .remove').forEach(b => {
    b.addEventListener('click', () => {
      const s = b.dataset.stage;
      const i = parseInt(b.dataset.idx);
      currentLesson[s].splice(i, 1);
      renderLessonStages();
    });
  });

  document.querySelectorAll('.planned-item input.reps').forEach(inp => {
    inp.addEventListener('change', () => {
      const s = inp.dataset.stage;
      const i = parseInt(inp.dataset.idx);
      currentLesson[s][i].reps = inp.value;
    });
  });
}

document.querySelectorAll('.stage-add').forEach(btn => {
  btn.addEventListener('click', () => {
    pickerTargetStage = btn.dataset.addTo;
    openPicker();
  });
});

function openPicker(searchTerm = '') {
  const list = document.getElementById('picker-list');
  const term = searchTerm.toLowerCase();
  const filtered = EXERCISES.filter(ex =>
    !term || ex.nameZh.includes(term) || ex.nameEn.toLowerCase().includes(term)
  );
  list.innerHTML = filtered.map(ex => `
    <div class="picker-item" data-id="${ex.id}">
      <div class="info">
        <div class="zh">${ex.nameZh}</div>
        <div class="en">${ex.nameEn}</div>
      </div>
      <span class="add-icon">+</span>
    </div>
  `).join('');

  list.querySelectorAll('.picker-item').forEach(item => {
    item.addEventListener('click', () => {
      const exId = item.dataset.id;
      currentLesson[pickerTargetStage].push({ id: exId, reps: getDefaultReps(pickerTargetStage) });
      closePicker();
      renderLessonStages();
      const ex = EXERCISES.find(e => e.id === exId);
      showToast(`已加入「${ex.nameZh}」`);
    });
  });

  document.getElementById('picker-sheet').classList.add('active');
  document.getElementById('picker-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('picker-search').focus(), 350);
}

function closePicker() {
  document.getElementById('picker-sheet').classList.remove('active');
  document.getElementById('picker-overlay').classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('picker-search').value = '';
}

document.getElementById('picker-overlay').addEventListener('click', closePicker);
document.getElementById('picker-search').addEventListener('input', e => {
  openPicker(e.target.value);
});

window.addToBuilderFromSheet = function(id) {
  currentLesson.main.push({ id, reps: getDefaultReps('main') });
  closeSheet();
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.view').forEach(x => x.classList.remove('active'));
  document.querySelector('.tab[data-view="builder"]').classList.add('active');
  document.getElementById('view-builder').classList.add('active');
  document.getElementById('topbar-title').textContent = VIEW_TITLES.builder;
  renderLessonStages();
  showToast('已加入主体训练');
};

document.getElementById('clear-lesson').addEventListener('click', () => {
  if (confirm('确定清空当前课表？')) {
    currentLesson = { warmup: [], main: [], cooldown: [] };
    document.getElementById('lesson-name').value = '';
    renderLessonStages();
  }
});

document.getElementById('save-lesson').addEventListener('click', async () => {
  const name = document.getElementById('lesson-name').value.trim();
  if (!name) { showToast('请填写课程标题'); return; }
  const total = currentLesson.warmup.length + currentLesson.main.length + currentLesson.cooldown.length;
  if (total === 0) { showToast('课表是空的'); return; }
  const lesson = {
    name,
    duration: document.getElementById('lesson-duration').value,
    level: document.getElementById('lesson-level').value,
    plan: JSON.parse(JSON.stringify(currentLesson)),
    savedAt: new Date().toISOString()
  };
  const id = 'lesson:' + Date.now();
  try {
    const lessons = JSON.parse(localStorage.getItem('pilates-lessons') || '{}');
    lessons[id] = lesson;
    localStorage.setItem('pilates-lessons', JSON.stringify(lessons));
    showToast('已保存 ✓');
  } catch (e) {
    showToast('保存失败');
  }
});

document.getElementById('export-lesson').addEventListener('click', () => {
  const name = document.getElementById('lesson-name').value || '未命名课程';
  const dur = document.getElementById('lesson-duration').value;
  const lvl = document.getElementById('lesson-level').value;
  let text = `${name}\n时长：${dur} 分钟 · 难度：${lvl}\n\n`;

  ['warmup', 'main', 'cooldown'].forEach(stage => {
    const stageNames = { warmup: '【热身】', main: '【主体训练】', cooldown: '【收操拉伸】' };
    text += stageNames[stage] + '\n';
    if (currentLesson[stage].length === 0) {
      text += '  （空）\n';
    } else {
      currentLesson[stage].forEach((item, i) => {
        const ex = EXERCISES.find(e => e.id === item.id);
        text += `  ${i+1}. ${ex.nameZh} / ${ex.nameEn} — ${item.reps}\n`;
        text += `     目标：${ex.primary}\n`;
        if (ex.cues.simple[0]) text += `     口令：${ex.cues.simple[0].zh}\n`;
      });
    }
    text += '\n';
  });

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('已复制到剪贴板 ✓');
    }).catch(() => { fallbackCopy(text); });
  } else {
    fallbackCopy(text);
  }
});

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('已复制 ✓');
  } catch (e) {
    showToast('复制失败');
  }
  document.body.removeChild(textarea);
}

// ============================================================
// SAVED LESSONS
// ============================================================
function renderSavedLessons() {
  const list = document.getElementById('saved-list');
  let lessons = {};
  try { lessons = JSON.parse(localStorage.getItem('pilates-lessons') || '{}'); } catch (e) {}

  const arr = Object.entries(lessons)
    .map(([id, l]) => ({ id, ...l }))
    .sort((a,b) => new Date(b.savedAt) - new Date(a.savedAt));

  document.getElementById('saved-sub').textContent = `${arr.length} 节课 · saved`;

  if (arr.length === 0) {
    list.innerHTML = `<div class="empty"><h3>还没有保存的课表</h3><p>去备课台搭一节</p></div>`;
    return;
  }

  list.innerHTML = arr.map(l => {
    const total = (l.plan.warmup?.length || 0) + (l.plan.main?.length || 0) + (l.plan.cooldown?.length || 0);
    const date = new Date(l.savedAt).toLocaleDateString('zh-CN');
    return `
      <div class="saved-card">
        <h4>${l.name}</h4>
        <div class="meta">${l.duration}min · ${l.level} · ${date}</div>
        <div class="preview">${total} 个动作 · ${l.plan.warmup?.length||0}热 / ${l.plan.main?.length||0}主 / ${l.plan.cooldown?.length||0}收</div>
        <div class="actions">
          <button onclick="loadLesson('${l.id}')">载入</button>
          <button class="delete-btn" onclick="deleteLesson('${l.id}')">删除</button>
        </div>
      </div>
    `;
  }).join('');
}

window.loadLesson = function(id) {
  const lessons = JSON.parse(localStorage.getItem('pilates-lessons') || '{}');
  const lesson = lessons[id];
  if (!lesson) return;
  currentLesson = lesson.plan;
  document.getElementById('lesson-name').value = lesson.name;
  document.getElementById('lesson-duration').value = lesson.duration;
  document.getElementById('lesson-level').value = lesson.level;
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.view').forEach(x => x.classList.remove('active'));
  document.querySelector('.tab[data-view="builder"]').classList.add('active');
  document.getElementById('view-builder').classList.add('active');
  document.getElementById('topbar-title').textContent = VIEW_TITLES.builder;
  renderLessonStages();
  showToast('已载入 ✓');
};

window.deleteLesson = function(id) {
  if (!confirm('确定删除这节课？')) return;
  const lessons = JSON.parse(localStorage.getItem('pilates-lessons') || '{}');
  delete lessons[id];
  localStorage.setItem('pilates-lessons', JSON.stringify(lessons));
  renderSavedLessons();
  showToast('已删除');
};

// ============================================================
// TOAST + INSTALL + SW
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-prompt').classList.add('show');
});

document.getElementById('install-btn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    document.getElementById('install-prompt').classList.remove('show');
  }
  deferredPrompt = null;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ============================================================
// INIT
// ============================================================
renderExerciseList();
renderPostureList();
renderLessonStages();
window.openSheet = openSheet;
window.closeSheet = closeSheet;
