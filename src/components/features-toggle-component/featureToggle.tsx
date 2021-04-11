import React, {useContext,useState} from 'react'
import { FeatureFlagsContext } from '../index'

// types
import { ActionType } from '../../contexts/feature-flags-context/featureFlagsContext'

const FeatureToggle = () => {
const [features,dispatch] = useContext(FeatureFlagsContext);
const [active,setActive] = useState('enable');

const handleToggleFeature = (e: any) => {
    // console.log(e.target.id)
    //@ts-ignore
    const typeAction = features[e.target.id].enabled ? 'disable' : 'enable';
    const actionObject: ActionType = {name: e.target.id, type: typeAction}
    dispatch(actionObject);
}

    return (
        <div>
            <button onClick={handleToggleFeature} id="formLogin">Toggle form feature {features.formLogin.enabled ? "off" : "on"}</button>
            
        </div>
    )
}

export {FeatureToggle}
