import router from '@/router';

export const mailValidate = (e) => {
    // const { t } = useI18n()
    if (!e) {
        console.log(e)
    } else {
        const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
        console.log(valid)
        return valid
    }
}
export const phoneValidate = (e) => {
    // const { t } = useI18n()
    if (!e) {
        return false
    } else {
        const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
        return valid
    }
}
export const passwordValidate = (e) => {
    if (!e) {
        return false
    } else {
        const valid = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test((e))
        console.log(valid)
        return valid
    }
}
export const errorShower = (e,i) => {
    if (e.length>0) {
       return  e.filter((item)=>item?.id===i)[0]?.title
    }

}
export const currency = (e, currency = 'USD') => {
    switch (currency) {
        case 'USD':
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'}).format(e)
        case 'IRR':
            return new Intl.NumberFormat('en-IR', { style: 'decimal', signDisplay: 'auto', currencyDisplay: 'symbol' }).format(e) + ' ريال'
    }
}
export const device = () => {
    if (window.innerWidth >= 1024) router.push('/')
    if (window.innerWidth <= 768 && window.innerWidth >= 425) router.push('/t')
    if (window.innerWidth >= 320 && window.innerWidth <= 425) router.push('/m')
}
