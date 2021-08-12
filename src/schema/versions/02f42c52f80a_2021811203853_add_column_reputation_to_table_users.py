# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add column reputation to table users

Revision ID: 02f42c52f80a
Revises: b403ab255274
Create Date: 2021-08-11 20:38:53.364844+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = '02f42c52f80a'
down_revision = 'b403ab255274'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column(
        'reputation', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'reputation')
    # ### end Alembic commands ###