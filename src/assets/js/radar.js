export default function createRadar(id, data, Radar) {
    return new Radar(id, {
        title: {
            visible: false,
            text: '多组雷达图',
        },
        data,
        angleField: 'item',
        radiusField: 'score',
        radiusAxis: {
            gridType: 'arc',
            gridAlternateColor: 'rgba(0, 0, 0, 0.04)',
        },
        area: {
            visible: true,
        },
        point: {
            visible: true,
        },
    })
};