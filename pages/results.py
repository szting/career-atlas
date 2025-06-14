import streamlit as st
import plotly.graph_objects as go
from utils.career_matcher import get_top_riasec_types

def render():
    st.title("🎯 Your Career Assessment Results")
    
    # User info
    st.markdown(f"### Hello, {st.session_state.user_profile['name']}!")
    st.markdown("Here's your personalized career profile based on your assessment results.")
    
    # RIASEC Profile with Spider Diagram
    st.subheader("🔍 Your RIASEC Personality Profile")
    
    col1, col2 = st.columns([2, 1])
    
    with col1:
        # Create spider/radar chart
        categories = list(st.session_state.user_profile['riasec_scores'].keys())
        values = list(st.session_state.user_profile['riasec_scores'].values())
        
        # Capitalize categories for display
        categories_display = [cat.capitalize() for cat in categories]
        
        fig = go.Figure()
        
        fig.add_trace(go.Scatterpolar(
            r=values,
            theta=categories_display,
            fill='toself',
            name='Your Profile',
            line_color='rgb(76, 175, 80)',
            fillcolor='rgba(76, 175, 80, 0.3)'
        ))
        
        fig.update_layout(
            polar=dict(
                radialaxis=dict(
                    visible=True,
                    range=[0, 100],
                    tickmode='linear',
                    tick0=0,
                    dtick=20
                )),
            showlegend=False,
            title="RIASEC Profile Spider Diagram",
            height=400
        )
        
        st.plotly_chart(fig, use_container_width=True)
    
    with col2:
        st.markdown("### Your Top Types:")
        top_types = get_top_riasec_types(st.session_state.user_profile['riasec_scores'])
        
        for i, (type_name, score) in enumerate(top_types):
            emoji = {
                'realistic': '🔧',
                'investigative': '🔬',
                'artistic': '🎨',
                'social': '🤝',
                'enterprising': '💼',
                'conventional': '📊'
            }.get(type_name, '📌')
            
            st.metric(
                label=f"{emoji} {type_name.capitalize()}
