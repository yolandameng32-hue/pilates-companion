// ============================================================
// EXERCISE LIBRARY (25 exercises)
// ============================================================
const EXERCISES = [
  // ---------- CORE ----------
  {
    id: 'hundred', nameZh: '百次拍击', nameEn: 'The Hundred',
    region: 'core', equip: ['mat', 'reformer'], level: 'beginner',
    primary: '腹横肌、腹直肌', primaryEn: 'Transverse Abdominis, Rectus Abdominis',
    secondary: '髋屈肌、肩稳定肌', secondaryEn: 'Hip Flexors, Shoulder Stabilizers',
    purpose: '激活深层核心，建立呼吸节奏', purposeEn: 'Activate deep core, establish breath rhythm',
    cues: {
      simple: [
        { zh: '吸气 2、3、4、5；呼气 2、3、4、5', en: 'Inhale 2,3,4,5; Exhale 2,3,4,5' },
        { zh: '手臂用力拍击空气', en: 'Pump the arms with intention' },
        { zh: '下巴轻收，看向肚脐', en: 'Chin slightly tucked, gaze to navel' }
      ],
      imagery: [
        { zh: '想象肚脐贴向脊柱，把腰背压平', en: 'Draw navel to spine, press low back into the mat' },
        { zh: '手臂像拍打温热的水面', en: 'Arms tap warm water, energizing the upper body' },
        { zh: '胸腔像折叠的扇子，慢慢打开又合上', en: 'Ribcage like a folding fan, opening and closing' }
      ],
      precise: [
        { zh: '启动腹横肌、维持骨盆中立位', en: 'Engage TVA, maintain neutral pelvis' },
        { zh: '肩胛骨下沉远离耳朵，颈椎保持长度', en: 'Scapulae depressed, cervical spine elongated' },
        { zh: '腹斜肌主动控制肋骨下降', en: 'Obliques actively control rib descent' }
      ]
    },
    errors: ['颈部代偿用力（应该是腹部启动）', '腰椎离开垫面（说明核心未真正激活）', '手臂过高，肩膀紧张']
  },
  {
    id: 'roll-up', nameZh: '卷上卷下', nameEn: 'Roll Up',
    region: 'core', equip: ['mat'], level: 'beginner',
    primary: '腹直肌、腹横肌', primaryEn: 'Rectus Abdominis, TVA',
    secondary: '髋屈肌、脊柱伸肌', secondaryEn: 'Hip Flexors, Spinal Extensors',
    purpose: '训练脊柱节段性控制、核心向心收缩', purposeEn: 'Train segmental spinal articulation',
    cues: {
      simple: [
        { zh: '吸气准备，呼气一节一节卷起来', en: 'Inhale to prepare, exhale roll up vertebra by vertebra' },
        { zh: '手臂先于身体启动', en: 'Arms initiate before the body' },
        { zh: '下来时更慢，控制每一节脊椎', en: 'Slower on the way down, control each vertebra' }
      ],
      imagery: [
        { zh: '像把脊柱当成珍珠项链，一颗一颗放回垫子', en: 'Spine like a string of pearls, placing one bead at a time' },
        { zh: '想象身体被前方一根线慢慢拉起', en: 'A thread pulls you up from the front' },
        { zh: '尾骨像锚一样固定，胸腔从中间打开', en: 'Tailbone anchored, ribs opening from the center' }
      ],
      precise: [
        { zh: '腹横肌优先启动，再做脊柱屈曲', en: 'TVA engages first, then spinal flexion' },
        { zh: '坐骨稳定下压，髋屈肌不主导', en: 'Sit bones grounded, hip flexors do not dominate' },
        { zh: '退回时控制髋伸至骨盆中立', en: 'Control hip extension back to neutral pelvis' }
      ]
    },
    errors: ['靠惯性甩起来（核心没有真正控制）', '脖子和肩膀紧张', '腰椎一段坍下来而非节段性']
  },
  {
    id: 'single-leg-stretch', nameZh: '单腿伸展', nameEn: 'Single Leg Stretch',
    region: 'core', equip: ['mat'], level: 'beginner',
    primary: '腹直肌、腹斜肌', primaryEn: 'Rectus Abdominis, Obliques',
    secondary: '髋屈肌、髋伸肌', secondaryEn: 'Hip Flexors and Extensors',
    purpose: '核心稳定下的下肢交替运动', purposeEn: 'Lower body coordination with core stability',
    cues: {
      simple: [
        { zh: '一腿伸直、一腿抱膝，交替', en: 'One leg long, one knee in, alternate' },
        { zh: '上身保持稳定，不晃动', en: 'Upper body stays still' },
        { zh: '呼气时腿伸出去', en: 'Exhale as the leg reaches out' }
      ],
      imagery: [
        { zh: '想象骨盆是一杯水，不能洒出来', en: 'Pelvis is a glass of water — don\'t spill it' },
        { zh: '伸出的腿像箭一样穿过远方', en: 'The extended leg shoots like an arrow' }
      ],
      precise: [
        { zh: '维持骨盆稳定与腰椎中立', en: 'Maintain pelvic stability and lumbar neutrality' },
        { zh: '腹斜肌防止髋部旋转', en: 'Obliques prevent pelvic rotation' }
      ]
    },
    errors: ['骨盆左右晃动', '上身随腿运动而起伏', '腰椎过度前凸']
  },
  {
    id: 'criss-cross', nameZh: '交叉扭转', nameEn: 'Criss-Cross',
    region: 'core', equip: ['mat'], level: 'intermediate',
    primary: '腹斜肌', primaryEn: 'Internal & External Obliques',
    secondary: '腹直肌、腹横肌', secondaryEn: 'Rectus Abdominis, TVA',
    purpose: '训练躯干旋转，强化腰围线', purposeEn: 'Train trunk rotation, sculpt waistline',
    cues: {
      simple: [
        { zh: '手肘找对角的膝盖', en: 'Elbow toward opposite knee' },
        { zh: '是胸腔在转，不是手肘', en: 'Rotate from the ribcage, not the elbow' },
        { zh: '呼气时扭转，吸气回中间', en: 'Exhale to rotate, inhale to center' }
      ],
      imagery: [
        { zh: '想象拧毛巾一样把腰围拧紧', en: 'Wring out the waist like a towel' },
        { zh: '后脑勺保持沉重，落在双手中', en: 'Back of head stays heavy, resting in your hands' }
      ],
      precise: [
        { zh: '腹斜肌主动驱动胸腰段旋转', en: 'Obliques drive thoracolumbar rotation' },
        { zh: '骨盆维持稳定，不参与旋转', en: 'Pelvis stays stable, does not rotate' }
      ]
    },
    errors: ['只是手肘动，胸腔没真正旋转', '骨盆跟着扭', '颈部用力代偿']
  },
  {
    id: 'plank', nameZh: '平板支撑', nameEn: 'Plank',
    region: 'core', equip: ['mat'], level: 'beginner',
    primary: '腹横肌、腹直肌', primaryEn: 'TVA, Rectus Abdominis',
    secondary: '前锯肌、臀大肌', secondaryEn: 'Serratus Anterior, Glutes',
    purpose: '全身性核心抗伸展稳定', purposeEn: 'Full-body anti-extension core stability',
    cues: {
      simple: [
        { zh: '从头到脚跟一条直线', en: 'Straight line head to heels' },
        { zh: '肚子收紧，臀部夹紧', en: 'Belly in, glutes squeezed' },
        { zh: '肩膀推开地板', en: 'Push the floor away through your shoulders' }
      ],
      imagery: [
        { zh: '想象一块木板顶在背上，不能让它滑下来', en: 'A plank rests on your back — don\'t let it slide' },
        { zh: '把胸腔从手臂中间提起来', en: 'Lift the ribcage between the arms' }
      ],
      precise: [
        { zh: '前锯肌启动维持肩胛骨贴附', en: 'Serratus anterior maintains scapular protraction' },
        { zh: '腹横肌持续激活防止腰椎下沉', en: 'TVA continuously active to prevent lumbar sagging' }
      ]
    },
    errors: ['臀部翘起或下塌', '肩胛骨内收下沉', '颈部前伸']
  },
  {
    id: 'side-plank', nameZh: '侧平板', nameEn: 'Side Plank',
    region: 'core', equip: ['mat'], level: 'intermediate',
    primary: '腰方肌、腹斜肌', primaryEn: 'Quadratus Lumborum, Obliques',
    secondary: '臀中肌、肩稳定肌', secondaryEn: 'Gluteus Medius, Shoulder Stabilizers',
    purpose: '侧链稳定性，改善侧弯与髋外展无力', purposeEn: 'Lateral chain stability',
    cues: {
      simple: [
        { zh: '髋部往天花板顶起来', en: 'Lift the hip toward the ceiling' },
        { zh: '支撑手肘在肩膀正下方', en: 'Supporting elbow directly under shoulder' }
      ],
      imagery: [
        { zh: '身体像一根从头到脚拉伸的弦', en: 'Body is a taut string from head to feet' }
      ],
      precise: [
        { zh: '臀中肌主动外展维持骨盆中立', en: 'Glute medius actively abducts to maintain neutral pelvis' }
      ]
    },
    errors: ['髋部下沉', '肩膀塌进关节窝']
  },
  {
    id: 'teaser', nameZh: '挑战者', nameEn: 'Teaser',
    region: 'core', equip: ['mat'], level: 'advanced',
    primary: '腹直肌、髋屈肌', primaryEn: 'Rectus Abdominis, Hip Flexors',
    secondary: '腹横肌、脊柱稳定肌', secondaryEn: 'TVA, Spinal Stabilizers',
    purpose: '核心力量与平衡的综合体现', purposeEn: 'Hallmark of core strength and balance',
    cues: {
      simple: [
        { zh: '身体形成 V 字', en: 'Body forms a V shape' },
        { zh: '从肚脐发力，慢慢卷起', en: 'Lead from the navel, roll up slowly' }
      ],
      imagery: [
        { zh: '像一片漂浮的叶子，轻盈地悬停', en: 'Float like a leaf, suspended mid-air' }
      ],
      precise: [
        { zh: '骨盆后倾配合脊柱屈曲控制重心', en: 'Posterior pelvic tilt with spinal flexion to control center of mass' }
      ]
    },
    errors: ['脖子代偿用力', '腰椎塌陷', '靠惯性甩上去']
  },

  // ---------- UPPER ----------
  {
    id: 'arm-circles', nameZh: '手臂画圈', nameEn: 'Arm Circles',
    region: 'upper', equip: ['mat', 'band'], level: 'beginner',
    primary: '三角肌、肩袖肌群', primaryEn: 'Deltoids, Rotator Cuff',
    secondary: '前锯肌、菱形肌', secondaryEn: 'Serratus Anterior, Rhomboids',
    purpose: '肩关节活动度、肩胛稳定', purposeEn: 'Shoulder mobility and scapular stability',
    cues: {
      simple: [
        { zh: '画大圈，不耸肩', en: 'Draw big circles, no shrugging' },
        { zh: '从肩关节发力，不是手臂', en: 'Move from the shoulder joint, not just the arm' }
      ],
      imagery: [
        { zh: '指尖在墙上画一个完美的圆', en: 'Fingertips paint a perfect circle on the wall' }
      ],
      precise: [
        { zh: '肩胛骨保持下沉、贴附胸廓', en: 'Scapulae remain depressed, anchored to ribcage' }
      ]
    },
    errors: ['圆耸肩', '只用小臂画']
  },
  {
    id: 'chest-expansion', nameZh: '胸腔扩张', nameEn: 'Chest Expansion',
    region: 'upper', equip: ['mat', 'band', 'reformer'], level: 'beginner',
    primary: '背阔肌、菱形肌', primaryEn: 'Lats, Rhomboids',
    secondary: '后三角肌、斜方肌中下束', secondaryEn: 'Posterior Deltoid, Mid/Lower Trapezius',
    purpose: '改善圆肩驼背，激活后链', purposeEn: 'Counteract rounded shoulders, activate posterior chain',
    cues: {
      simple: [
        { zh: '手臂往身体后方拉，胸口打开', en: 'Pull arms behind you, open the chest' },
        { zh: '肩胛骨向下、向内', en: 'Shoulder blades down and in' }
      ],
      imagery: [
        { zh: '想象后背夹住一支铅笔', en: 'Squeeze a pencil between your shoulder blades' },
        { zh: '心口像一朵慢慢盛开的花', en: 'The heart blooms open like a slow flower' }
      ],
      precise: [
        { zh: '激活下斜方与背阔，避免上斜方代偿', en: 'Activate lower traps and lats, avoid upper trap dominance' }
      ]
    },
    errors: ['耸肩用上斜方代偿', '腰椎过度前凸找开胸']
  },
  {
    id: 'push-up', nameZh: '俯卧撑', nameEn: 'Push-Up',
    region: 'upper', equip: ['mat'], level: 'intermediate',
    primary: '胸大肌、三头肌', primaryEn: 'Pectoralis Major, Triceps',
    secondary: '前三角肌、核心', secondaryEn: 'Anterior Deltoid, Core',
    purpose: '上肢力量配合核心稳定', purposeEn: 'Upper body strength integrated with core',
    cues: {
      simple: [
        { zh: '手肘贴近身体，不外翻', en: 'Elbows close to ribs, not flared' },
        { zh: '胸口先碰地，不是脸', en: 'Chest leads down, not the face' }
      ],
      imagery: [
        { zh: '把地板推开，像推一艘船离岸', en: 'Push the floor away like pushing a boat from shore' }
      ],
      precise: [
        { zh: '前锯肌维持肩胛骨贴附', en: 'Serratus anterior keeps scapulae anchored' }
      ]
    },
    errors: ['手肘大幅外翻伤肩', '腰部下塌']
  },
  {
    id: 'tricep-dip', nameZh: '三头肌下沉', nameEn: 'Tricep Dips',
    region: 'upper', equip: ['mat', 'chair'], level: 'beginner',
    primary: '三头肌', primaryEn: 'Triceps',
    secondary: '前三角肌、胸大肌', secondaryEn: 'Anterior Deltoid, Pectorals',
    purpose: '后臂塑形', purposeEn: 'Tone the back of the arms',
    cues: {
      simple: [{ zh: '手肘向后弯，不要外翻', en: 'Elbows bend straight back, not out' }],
      imagery: [{ zh: '臀部贴着一面看不见的墙下滑', en: 'Hips slide down an invisible wall' }],
      precise: [{ zh: '肩胛骨下沉，肘屈曲控制在矢状面', en: 'Scapulae depressed, elbow flexion stays in sagittal plane' }]
    },
    errors: ['肩膀耸起', '手肘外翻']
  },

  // ---------- LOWER ----------
  {
    id: 'bridge', nameZh: '臀桥', nameEn: 'Pelvic Bridge',
    region: 'lower', equip: ['mat', 'ring', 'ball'], level: 'beginner',
    primary: '臀大肌、腘绳肌', primaryEn: 'Gluteus Maximus, Hamstrings',
    secondary: '腹横肌、骨盆底肌', secondaryEn: 'TVA, Pelvic Floor',
    purpose: '激活臀肌、改善骨盆前倾', purposeEn: 'Glute activation, address anterior pelvic tilt',
    cues: {
      simple: [
        { zh: '尾骨先离开垫子，一节一节卷起来', en: 'Tailbone lifts first, then peel up vertebra by vertebra' },
        { zh: '夹紧臀部，不靠腰发力', en: 'Squeeze the glutes, not the lower back' }
      ],
      imagery: [
        { zh: '像剥香蕉皮一样把脊柱从地面剥起', en: 'Peel the spine off the mat like a banana peel' },
        { zh: '骨盆是一只碗，慢慢端平再托起', en: 'Pelvis is a bowl — level it, then lift' }
      ],
      precise: [
        { zh: '骨盆后倾启动，臀大肌主导髋伸', en: 'Initiate with posterior tilt, glute max drives hip extension' },
        { zh: '腰椎避免代偿性过度前凸', en: 'Avoid lumbar hyperextension compensation' }
      ]
    },
    errors: ['腰部代偿（胸廓比骨盆还高）', '膝盖外八', '大腿前侧用力多于臀部']
  },
  {
    id: 'single-leg-bridge', nameZh: '单腿臀桥', nameEn: 'Single Leg Bridge',
    region: 'lower', equip: ['mat'], level: 'intermediate',
    primary: '臀大肌、臀中肌', primaryEn: 'Gluteus Maximus, Medius',
    secondary: '腘绳肌、核心', secondaryEn: 'Hamstrings, Core',
    purpose: '单侧臀部力量、抗骨盆掉落', purposeEn: 'Unilateral glute strength, anti-drop pelvis',
    cues: {
      simple: [{ zh: '骨盆保持水平，不要一边掉下来', en: 'Keep the pelvis level — don\'t let one side drop' }],
      imagery: [{ zh: '骨盆上放一个杯子，不能让它倾倒', en: 'A cup balances on your pelvis — don\'t spill it' }],
      precise: [{ zh: '臀中肌防止对侧骨盆下掉', en: 'Glute medius prevents contralateral pelvic drop' }]
    },
    errors: ['骨盆一侧掉下', '靠手臂顶垫子']
  },
  {
    id: 'clam-shell', nameZh: '蚌式开合', nameEn: 'Clam Shell',
    region: 'lower', equip: ['mat', 'band'], level: 'beginner',
    primary: '臀中肌、臀小肌', primaryEn: 'Gluteus Medius, Minimus',
    secondary: '深层髋外旋肌', secondaryEn: 'Deep Hip External Rotators',
    purpose: '激活臀中肌，改善膝内扣、X型腿', purposeEn: 'Activate glute medius, address knee valgus',
    cues: {
      simple: [
        { zh: '脚跟并拢，膝盖打开，骨盆不要往后转', en: 'Heels together, knees apart, pelvis stays still' },
        { zh: '感觉是屁股侧面在用力', en: 'Feel the side of the glute working' }
      ],
      imagery: [{ zh: '骨盆像贝壳，缓慢张开却不掉落', en: 'Pelvis is a clam — open without rocking' }],
      precise: [{ zh: '臀中肌后束启动，骨盆维持矢状面稳定', en: 'Posterior glute medius engages, pelvis stays in sagittal plane' }]
    },
    errors: ['骨盆后倒（变成腰发力）', '幅度过大失去目标肌群']
  },
  {
    id: 'squat', nameZh: '深蹲', nameEn: 'Squat',
    region: 'lower', equip: ['mat', 'ball', 'reformer'], level: 'beginner',
    primary: '股四头肌、臀大肌', primaryEn: 'Quadriceps, Gluteus Maximus',
    secondary: '腘绳肌、核心', secondaryEn: 'Hamstrings, Core',
    purpose: '下肢综合力量与髋膝踝协同', purposeEn: 'Lower body strength and hip-knee-ankle coordination',
    cues: {
      simple: [
        { zh: '像坐在身后的椅子上', en: 'Sit back into an imaginary chair' },
        { zh: '膝盖跟着脚尖方向', en: 'Knees track over toes' }
      ],
      imagery: [{ zh: '尾骨像狗尾巴一样往后翘出去', en: 'Tailbone reaches back like a dog\'s tail' }],
      precise: [
        { zh: '髋屈先启动，膝踝同步屈曲', en: 'Hip flexion initiates, knee and ankle flex synchronously' },
        { zh: '足弓主动维持，避免膝内扣', en: 'Active foot arch, prevent knee valgus' }
      ]
    },
    errors: ['膝盖内扣', '后脚跟离地', '腰椎过度前凸或后凸']
  },
  {
    id: 'lunge', nameZh: '弓步', nameEn: 'Lunge',
    region: 'lower', equip: ['mat', 'reformer'], level: 'intermediate',
    primary: '股四头肌、臀大肌', primaryEn: 'Quadriceps, Glutes',
    secondary: '腘绳肌、核心稳定肌', secondaryEn: 'Hamstrings, Core Stabilizers',
    purpose: '单侧下肢力量、平衡', purposeEn: 'Unilateral leg strength and balance',
    cues: {
      simple: [
        { zh: '前膝在脚踝正上方', en: 'Front knee stacks over ankle' },
        { zh: '上身竖直，不前倾', en: 'Torso upright, not leaning forward' }
      ],
      imagery: [{ zh: '想象电梯垂直下降', en: 'Imagine an elevator going straight down' }],
      precise: [{ zh: '后腿髋屈肌伸展，前腿髋伸肌承重', en: 'Back hip flexor lengthens, front hip extensors load' }]
    },
    errors: ['前膝超过脚尖', '上身大幅前倾']
  },
  {
    id: 'side-leg-lift', nameZh: '侧躺抬腿', nameEn: 'Side Leg Lifts',
    region: 'lower', equip: ['mat', 'band'], level: 'beginner',
    primary: '臀中肌', primaryEn: 'Gluteus Medius',
    secondary: '臀小肌、腰方肌', secondaryEn: 'Glute Minimus, QL',
    purpose: '臀中肌孤立训练', purposeEn: 'Isolate glute medius',
    cues: {
      simple: [{ zh: '腿稍微往后一点点抬，不要往前', en: 'Leg lifts slightly behind midline, not forward' }],
      imagery: [{ zh: '腿像电风扇叶子，安静地划过空气', en: 'Leg slices the air like a quiet fan blade' }],
      precise: [{ zh: '髋外展配合轻微外旋，避免阔筋膜张肌主导', en: 'Hip abduction with slight external rotation' }]
    },
    errors: ['骨盆后倾', '用大腿前侧（阔筋膜张肌）发力']
  },

  // ---------- SPINE ----------
  {
    id: 'cat-cow', nameZh: '猫牛式', nameEn: 'Cat-Cow',
    region: 'spine', equip: ['mat'], level: 'beginner',
    primary: '脊柱伸肌、屈肌', primaryEn: 'Spinal Extensors and Flexors',
    secondary: '核心、肩稳定肌', secondaryEn: 'Core, Shoulder Stabilizers',
    purpose: '脊柱节段性活动，呼吸联结', purposeEn: 'Spinal articulation and breath connection',
    cues: {
      simple: [{ zh: '吸气，胸口往前推；呼气，背部圆起', en: 'Inhale chest forward; exhale round the back' }],
      imagery: [{ zh: '脊柱像一条波浪，从尾骨到头顶传递', en: 'Spine is a wave traveling from tail to crown' }],
      precise: [{ zh: '从骨盆启动屈伸，逐节传递至颈椎', en: 'Movement initiates from pelvis, sequencing to cervical spine' }]
    },
    errors: ['只是头在动', '只动腰，胸椎僵硬']
  },
  {
    id: 'swan', nameZh: '天鹅式', nameEn: 'Swan',
    region: 'spine', equip: ['mat', 'reformer'], level: 'intermediate',
    primary: '脊柱伸肌、臀大肌', primaryEn: 'Spinal Extensors, Glutes',
    secondary: '后链整体', secondaryEn: 'Posterior Chain',
    purpose: '脊柱伸展，对抗久坐圆背', purposeEn: 'Spinal extension, counteract seated rounded posture',
    cues: {
      simple: [
        { zh: '胸口先离地，不是头', en: 'Lead with the chest, not the head' },
        { zh: '臀部夹紧保护腰椎', en: 'Squeeze glutes to protect the lower back' }
      ],
      imagery: [{ zh: '胸口像花朵向阳光打开', en: 'Chest blooms toward the sun' }],
      precise: [{ zh: '胸椎伸展为主，避免腰椎过度后伸代偿', en: 'Thoracic extension prioritized, avoid lumbar hyperextension' }]
    },
    errors: ['仅靠腰部后伸', '颈部过度后仰']
  },
  {
    id: 'spine-twist', nameZh: '脊柱扭转', nameEn: 'Spine Twist',
    region: 'spine', equip: ['mat'], level: 'beginner',
    primary: '腹斜肌、脊柱旋转肌', primaryEn: 'Obliques, Spinal Rotators',
    secondary: '骨盆底肌', secondaryEn: 'Pelvic Floor',
    purpose: '胸椎旋转，提升脊柱灵活度', purposeEn: 'Thoracic rotation, improve spinal mobility',
    cues: {
      simple: [
        { zh: '坐高，从胸口开始扭', en: 'Sit tall, rotate from the chest' },
        { zh: '骨盆面朝正前方', en: 'Pelvis faces straight forward' }
      ],
      imagery: [{ zh: '想象身体是一根螺丝，越拧越长', en: 'Body is a screw — twist longer as it turns' }],
      precise: [{ zh: '骨盆稳定，旋转主要发生在胸椎段', en: 'Pelvis stable, rotation mainly at thoracic spine' }]
    },
    errors: ['骨盆跟着转', '坐得驼背']
  },
  {
    id: 'mermaid', nameZh: '美人鱼', nameEn: 'Mermaid',
    region: 'spine', equip: ['mat', 'reformer'], level: 'beginner',
    primary: '腹斜肌、腰方肌', primaryEn: 'Obliques, Quadratus Lumborum',
    secondary: '背阔肌', secondaryEn: 'Latissimus Dorsi',
    purpose: '侧屈延展，平衡侧链', purposeEn: 'Lateral flexion, balance the lateral chain',
    cues: {
      simple: [
        { zh: '想象自己长高，再往一边倒', en: 'Lengthen up first, then tip to the side' },
        { zh: '两侧坐骨保持着地', en: 'Both sit bones stay grounded' }
      ],
      imagery: [{ zh: '身体像彩虹一样长长地拱起', en: 'Body arches long like a rainbow' }],
      precise: [{ zh: '侧屈伴随脊柱延长，避免压缩侧腰', en: 'Lateral flexion with axial elongation' }]
    },
    errors: ['一侧坐骨翘起', '塌侧腰']
  },

  // ---------- FULL BODY ----------
  {
    id: 'roll-down', nameZh: '站姿卷下', nameEn: 'Standing Roll Down',
    region: 'full', equip: ['mat'], level: 'beginner',
    primary: '脊柱屈肌、腘绳肌', primaryEn: 'Spinal Flexors, Hamstrings',
    secondary: '核心、足底', secondaryEn: 'Core, Foot Intrinsics',
    purpose: '热身，建立呼吸与脊柱联结', purposeEn: 'Warm-up, establish breath-spine connection',
    cues: {
      simple: [{ zh: '低头，再一节一节往下卷', en: 'Drop the head, then roll down vertebra by vertebra' }],
      imagery: [{ zh: '像把一串项链慢慢挂下来', en: 'Lower a string of beads slowly downward' }],
      precise: [{ zh: '颈胸腰段依次屈曲，骨盆最后才动', en: 'Cervical, thoracic, lumbar flex in sequence; pelvis moves last' }]
    },
    errors: ['膝盖锁死', '腰椎一段坍下']
  },
  {
    id: 'standing-balance', nameZh: '单腿平衡', nameEn: 'Standing Balance',
    region: 'full', equip: ['mat'], level: 'beginner',
    primary: '臀中肌、足底', primaryEn: 'Glute Medius, Foot Intrinsics',
    secondary: '核心、深层稳定肌', secondaryEn: 'Core, Deep Stabilizers',
    purpose: '本体感受、抗摔倒', purposeEn: 'Proprioception, fall prevention',
    cues: {
      simple: [{ zh: '把脚掌想象成三脚架，平均承重', en: 'Foot is a tripod — distribute weight evenly' }],
      imagery: [{ zh: '像一棵树，根扎深，枝叶向上', en: 'Like a tree — roots deep, branches up' }],
      precise: [{ zh: '激活足底固有肌，髋关节稳定肌共同维持平衡', en: 'Foot intrinsics + hip stabilizers maintain balance' }]
    },
    errors: ['站不稳就憋气', '骨盆侧向下掉']
  },
  {
    id: 'footwork-reformer', nameZh: '床上足部练习', nameEn: 'Reformer Footwork',
    region: 'full', equip: ['reformer'], level: 'beginner',
    primary: '股四头肌、臀肌、小腿三头肌', primaryEn: 'Quadriceps, Glutes, Triceps Surae',
    secondary: '核心、足底', secondaryEn: 'Core, Foot Intrinsics',
    purpose: '系统化下肢热身，连接全身', purposeEn: 'Systematic lower body warm-up',
    cues: {
      simple: [
        { zh: '推出去时呼气，回来时吸气', en: 'Exhale to push out, inhale to return' },
        { zh: '脚跟下压，足弓上提', en: 'Heels press, arches lift' }
      ],
      imagery: [{ zh: '弹簧的阻力是一团慢慢压下去的云', en: 'Spring resistance is a cloud you slowly compress' }],
      precise: [{ zh: '骨盆中立、腹横肌持续启动', en: 'Neutral pelvis, sustained TVA engagement' }]
    },
    errors: ['腰椎过度前凸', '膝盖锁死']
  }
];

// ============================================================
// POSTURE PROTOCOLS
// ============================================================
const POSTURES = [
  {
    id: 'kyphosis',
    nameZh: '圆肩驼背 / 上交叉综合征', nameEn: 'Rounded Shoulders / Upper-Crossed',
    summary: '长期久坐、低头看屏幕导致胸椎屈曲、肩前引、头前伸的复合体态',
    summaryEn: 'Combined posture from prolonged sitting and screen use: thoracic flexion, forward shoulders, forward head',
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
    recommendedIds: ['chest-expansion', 'swan', 'arm-circles', 'cat-cow', 'mermaid', 'spine-twist'],
    notes: '课堂中尽量加入俯卧后伸展和站姿扩胸；避免持续屈曲性动作（如太多卷腹）。建议每节课开胸 ≥ 5 分钟。',
    notesEn: 'Include prone extension and standing chest opening; avoid excessive flexion-dominant work. Aim for ≥5 min of chest opening per class.'
  },
  {
    id: 'apt',
    nameZh: '骨盆前倾 / 下交叉综合征', nameEn: 'Anterior Pelvic Tilt / Lower-Crossed',
    summary: '腰椎曲度过大、小腹前凸，常伴腰痛与久坐者',
    summaryEn: 'Excessive lumbar curve, protruding belly; common in sedentary individuals with low back pain',
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
    recommendedIds: ['bridge', 'single-leg-bridge', 'roll-up', 'plank', 'cat-cow', 'hundred'],
    notes: '骨盆中立位的教学是这类学员的核心。所有臀桥与腹部练习，先教骨盆后倾的启动顺序，避免他们用腰找发力。',
    notesEn: 'Teaching neutral pelvis is paramount. Cue posterior tilt initiation first to prevent lumbar dominance.'
  },
  {
    id: 'scoliosis',
    nameZh: '脊柱侧弯', nameEn: 'Scoliosis',
    summary: '脊柱在冠状面的非生理性侧向弯曲，常伴旋转',
    summaryEn: 'Non-physiological lateral curvature of the spine in the coronal plane, often with rotation',
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
    recommendedIds: ['side-plank', 'mermaid', 'spine-twist', 'cat-cow', 'plank'],
    notes: '务必先了解学员侧弯类型（C型/S型，凸向哪侧）。Mermaid 不要两边平均做——凸侧少做或不做，凹侧加强。建议有医学影像参考。',
    notesEn: 'Assess curve type (C/S, convex direction) first. Don\'t do Mermaid evenly — minimize convex side, emphasize concave side.'
  },
  {
    id: 'flatfoot',
    nameZh: '扁平足 / X或O型腿', nameEn: 'Flat Foot / Knee Valgus or Varus',
    summary: '足弓塌陷与膝关节力线异常，影响整个下肢链',
    summaryEn: 'Collapsed arches and knee alignment issues affecting the entire lower kinetic chain',
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
    recommendedIds: ['clam-shell', 'side-leg-lift', 'standing-balance', 'squat', 'bridge'],
    notes: '深蹲必须严格教膝盖追脚尖。先做大量蚌式、侧抬腿激活臀中肌，再进入功能性下肢动作。可加入"短足"练习。',
    notesEn: 'Cue knee tracking over toes strictly in squats. Begin with clam shells and side leg lifts before functional work.'
  },
  {
    id: 'postpartum',
    nameZh: '产后核心松弛 / 腹直肌分离', nameEn: 'Postpartum / Diastasis Recti',
    summary: '产后腹白线松弛、腹直肌分离，常伴骨盆底功能下降',
    summaryEn: 'Postpartum linea alba laxity, rectus abdominis separation, often with pelvic floor dysfunction',
    focus: '由内向外重建：呼吸 → 骨盆底 → 腹横肌 → 整体核心',
    focusEn: 'Rebuild inside-out: breath → pelvic floor → TVA → integrated core',
    strengthen: [
      { zh: '腹横肌（深层）', en: 'Transverse Abdominis (deep)' },
      { zh: '骨盆底肌', en: 'Pelvic Floor' },
      { zh: '臀大肌', en: 'Gluteus Maximus' },
      { zh: '多裂肌', en: 'Multifidus' }
    ],
    release: [
      { zh: '上腹部紧张筋膜', en: 'Upper abdominal tightness' },
      { zh: '髂腰肌（产后常紧）', en: 'Iliopsoas (often tight postpartum)' }
    ],
    recommendedIds: ['bridge', 'cat-cow', 'clam-shell', 'side-plank', 'standing-balance'],
    notes: '⚠️ 产后 6 个月内（特别是分离 ≥ 2 指）严禁卷腹、平板、Hundred 这类高腹压动作。先做 4-6 周呼吸 + 骨盆底激活，再进入深层核心。注意检查腹直肌分离指数。',
    notesEn: '⚠️ Within 6 months postpartum (especially with ≥2-finger separation), AVOID crunches, plank, Hundred. Spend 4-6 weeks on breath + pelvic floor before deep core.',
    warning: true
  },
  {
    id: 'forward-head',
    nameZh: '颈前引 / 头前伸', nameEn: 'Forward Head Posture',
    summary: '头部重心位于身体中线之前，常与圆肩驼背并存',
    summaryEn: 'Head center of gravity in front of body midline, often paired with rounded shoulders',
    focus: '激活深层颈屈肌，松解枕骨下与上斜方',
    focusEn: 'Activate deep cervical flexors, release suboccipitals & upper trap',
    strengthen: [
      { zh: '深层颈屈肌（颈长肌、头长肌）', en: 'Deep Cervical Flexors' },
      { zh: '中下斜方肌', en: 'Mid/Lower Trapezius' },
      { zh: '胸椎伸肌', en: 'Thoracic Extensors' }
    ],
    release: [
      { zh: '枕骨下肌群', en: 'Suboccipitals' },
      { zh: '胸锁乳突肌', en: 'Sternocleidomastoid' },
      { zh: '上斜方肌', en: 'Upper Trapezius' }
    ],
    recommendedIds: ['chest-expansion', 'swan', 'cat-cow', 'arm-circles', 'roll-down'],
    notes: '所有动作中加"下巴轻收"（chin nod）的口令。避免长时间仰卧位做大幅度颈部屈曲。',
    notesEn: 'Add "chin nod" cue across all exercises. Avoid prolonged supine flexion of the neck.'
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
// TABS (BOTTOM)
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
    if (view === 'posture' && document.querySelector('.posture-detail-active')) {
      // Reset posture detail view when re-entering
      renderPostureList();
    }
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
  // Switch to builder view
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
    }).catch(() => {
      fallbackCopy(text);
    });
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
    showToast('复制失败，手动选择文本');
  }
  document.body.removeChild(textarea);
}

// ============================================================
// SAVED LESSONS
// ============================================================
function renderSavedLessons() {
  const list = document.getElementById('saved-list');
  let lessons = {};
  try {
    lessons = JSON.parse(localStorage.getItem('pilates-lessons') || '{}');
  } catch (e) {}

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
// TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ============================================================
// PWA INSTALL PROMPT (Android)
// ============================================================
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

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.log('SW registration failed:', err);
    });
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
