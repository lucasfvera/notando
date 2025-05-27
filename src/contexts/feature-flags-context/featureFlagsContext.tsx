import React, { createContext, useReducer, ReactNode } from 'react';

type PropsOfType<Props, Type> = {
	//@ts-expect-error
	[Property in Props]: Type;
};

export interface Feature {
	name: string;
	description: string;
	enabled: boolean;
}

export type FeaturesObject = PropsOfType<FeatureNames, Feature>;

// export interface FeaturesObject {
//     [name: string]: Feature
// }

export interface ActionType {
	type: 'enable' | 'disable';
	name: FeatureNames;
}

export type FeatureNames = 'test' | 'formLogin';

const initialFeatures: FeaturesObject = {
	test: {
		name: 'test',
		description: 'Banner at right corner to test if feature flags works',
		enabled: true,
	},
	formLogin: {
		name: 'formLogin',
		description: 'new form login for users',
		enabled: true,
	},
};

const reducer = (features: FeaturesObject, action: ActionType) => {
	switch (action.type) {
		case 'enable':
			const enabledFeature = features[action.name];
			enabledFeature.enabled = true;
			return {
				...features,
				[action.name]: enabledFeature,
			};
		case 'disable':
			const disabledFeature = features[action.name];
			disabledFeature.enabled = false;
			return {
				...features,
				[action.name]: disabledFeature,
			};
		default:
			return features;
	}
};

export const FeatureFlagsContext = createContext<
	[FeaturesObject, React.Dispatch<ActionType>]
>([initialFeatures, () => {}]);

export const FeatureFlagsContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [features, dispatch] = useReducer(reducer, initialFeatures);

	return (
		<FeatureFlagsContext.Provider value={[features, dispatch]}>
			{children}
		</FeatureFlagsContext.Provider>
	);
};
