# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add user_authentication_details_edges table
add index user_authentication_details_edges_time_idx to user_authentication_details_edges
add edge UserToAuthenticationDetailsEdge

Revision ID: 15cf47c4068b
Revises: d4b42cf48710
Create Date: 2021-08-15 23:04:04.335422+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '15cf47c4068b'
down_revision = 'd4b42cf48710'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_authentication_details_edges',
                    sa.Column('id1', postgresql.UUID(), nullable=False),
                    sa.Column('id1_type', sa.Text(), nullable=False),
                    sa.Column('edge_type', postgresql.UUID(), nullable=False),
                    sa.Column('id2', postgresql.UUID(), nullable=False),
                    sa.Column('id2_type', sa.Text(), nullable=False),
                    sa.Column('time', sa.TIMESTAMP(), nullable=False),
                    sa.Column('data', sa.Text(), nullable=True),
                    sa.PrimaryKeyConstraint(
                        'id1', 'edge_type', 'id2', name='user_authentication_details_edges_id1_edge_type_id2_pkey')
                    )
    op.create_index('user_authentication_details_edges_time_idx',
                    'user_authentication_details_edges', ['time'], unique=False)
    op.add_edges([
        {'edge_name': 'UserToAuthenticationDetailsEdge', 'edge_type': '76806fdf-2a89-4c5f-947b-1bd9dad8b03d',
            'edge_table': 'user_authentication_details_edges', 'symmetric_edge': False, 'inverse_edge_type': None},
    ])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.remove_edges([
        {'edge_name': 'UserToAuthenticationDetailsEdge', 'edge_type': '76806fdf-2a89-4c5f-947b-1bd9dad8b03d',
            'edge_table': 'user_authentication_details_edges', 'symmetric_edge': False, 'inverse_edge_type': None},
    ])

    op.drop_index('user_authentication_details_edges_time_idx',
                  table_name='user_authentication_details_edges')
    op.drop_table('user_authentication_details_edges')
    # ### end Alembic commands ###
