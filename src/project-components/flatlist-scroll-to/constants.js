export const data = [{
    id: 1,
    title: '苹果汁',
    supplier: '家家乐',
    amount: 24,
    remain: 39
}, {
    id: 2,
    title: '牛奶',
    supplier: '家家乐',
    amount: 12,
    remain: 20
}, {
    id: 3,
    title: '番茄酱',
    supplier: '康复食品',
    amount: 12,
    remain: 0
}, {
    id: 4,
    title: '盐',
    supplier: '康复食品',
    amount: 10,
    remain: 120
}, {
    id: 5,
    title: '麻油',
    supplier: '秒升',
    amount: 40,
    remain: 11
}, {
    id: 6,
    title: '酱油',
    supplier: '秒升',
    amount: 9,
    remain: 33
}, {
    id: 7,
    title: '海鲜粉',
    supplier: '为全',
    amount: 7,
    remain: 77
}, {
    id: 8,
    title: '胡椒粉',
    supplier: '微圈',
    amount: 2,
    remain: 14
}, {
    id: 9,
    title: '苹果汁',
    supplier: '家家乐',
    amount: 24,
    remain: 39
}, {
    id: 10,
    title: '牛奶',
    supplier: '家家乐',
    amount: 12,
    remain: 20
}, {
    id: 11,
    title: '番茄酱',
    supplier: '康复食品',
    amount: 12,
    remain: 0
}, {
    id: 12,
    title: '盐',
    supplier: '康复食品',
    amount: 10,
    remain: 120
}, {
    id: 13,
    title: '苹果汁',
    supplier: '家家乐',
    amount: 24,
    remain: 39
}, {
    id: 14,
    title: '牛奶',
    supplier: '家家乐',
    amount: 12,
    remain: 20
}, {
    id: 15,
    title: '番茄酱',
    supplier: '康复食品',
    amount: 12,
    remain: 0
}, {
    id: 16,
    title: '盐',
    supplier: '康复食品',
    amount: 10,
    remain: 120
},
// {
//     id: 17,
//     title: '苹果汁',
//     supplier: '家家乐',
//     amount: 24,
//     remain: 39
// }
]

export const scrollData = () => {
    const data = []
    for (var i = 0; i < 10; i++) {
        data.push({
            id: i,
            title: `第${i}个`,
            des: `关于${i}的描述`
        })
    }
    return data
}
