import React, { useContext } from 'react'
import { FeatureFlagsContext } from '../index'

// types
import { FeatureNames } from '../../contexts/feature-flags-context/featureFlagsContext';

interface FeatureProps {
    name: FeatureNames;
    children: JSX.Element;
    fallback?: JSX.Element;
}

const fallbackmsg = <div>Service temporally unavailable. We´re working to fix it!</div>

const FeatureController = ({ name, children, fallback = fallbackmsg } : FeatureProps) => {
    const [features, dispatch]= useContext(FeatureFlagsContext);

    if (features && features[name].enabled) {
        return children;
    }

    return fallback;
};

export {FeatureController};